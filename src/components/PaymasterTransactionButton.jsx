import { usePaymaster } from '../hooks/usePaymaster';

const PaymasterTransactionButton = ({ 
  type, 
  onSuccess, 
  onError, 
  disabled = false,
  children,
  ...props 
}) => {
  const { 
    recordChoice, 
    mintEnding, 
    batchUpdateProgress,
    isLoading, 
    error, 
    isPaymasterAvailable 
  } = usePaymaster();

  const handleTransaction = async () => {
    try {
      let result;
      
      switch (type) {
        case 'recordChoice':
          result = await recordChoice(props.storyId, props.decisionId, props.choiceId);
          break;
        case 'mintEnding':
          result = await mintEnding(props.storyId, props.endingId, props.metadata);
          break;
        case 'batchUpdate':
          result = await batchUpdateProgress(props.updates);
          break;
        default:
          throw new Error(`Unknown transaction type: ${type}`);
      }
      
      if (onSuccess) {
        onSuccess(result);
      }
    } catch (err) {
      if (onError) {
        onError(err);
      }
    }
  };

  if (!isPaymasterAvailable) {
    return (
      <div className="glass" style={{ 
        padding: '1rem', 
        borderRadius: '0.5rem',
        textAlign: 'center',
        border: '1px solid rgba(239, 68, 68, 0.3)',
        backgroundColor: 'rgba(239, 68, 68, 0.1)'
      }}>
        <div className="text-red-400" style={{ fontSize: '0.875rem', marginBottom: '0.5rem' }}>
          ⚠️ Paymaster Not Available
        </div>
        <div className="text-gray-300" style={{ fontSize: '0.75rem' }}>
          Please use Coinbase Smart Wallet for gasless transactions
        </div>
      </div>
    );
  }

  return (
    <button
      onClick={handleTransaction}
      disabled={disabled || isLoading}
      className="btn btn-primary"
      style={{
        opacity: disabled || isLoading ? 0.6 : 1,
        cursor: disabled || isLoading ? 'not-allowed' : 'pointer',
        position: 'relative'
      }}
    >
      {isLoading ? (
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <div style={{
            width: '16px',
            height: '16px',
            border: '2px solid transparent',
            borderTop: '2px solid currentColor',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite'
          }}></div>
          Processing...
        </div>
      ) : (
        children
      )}
      
      {error && (
        <div className="text-red-400" style={{ 
          fontSize: '0.75rem', 
          marginTop: '0.5rem',
          textAlign: 'center'
        }}>
          {error}
        </div>
      )}
    </button>
  );
};

export default PaymasterTransactionButton; 