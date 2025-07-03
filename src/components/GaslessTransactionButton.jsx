import { useState, useEffect } from 'react';
import { useGaslessTransactions } from '../hooks/useGaslessTransactions';

const GaslessTransactionButton = ({ 
  type, 
  data, 
  onSuccess, 
  onError, 
  children, 
  disabled = false,
  className = "btn btn-primary"
}) => {
  const { 
    recordChoice, 
    mintEnding, 
    batchUpdateProgress, 
    isLoading, 
    error, 
    canUseGasless,
    checkEligibility 
  } = useGaslessTransactions();
  
  const [eligibility, setEligibility] = useState(null);
  const [showEligibility, setShowEligibility] = useState(false);

  useEffect(() => {
    if (canUseGasless) {
      checkEligibility().then(setEligibility);
    }
  }, [canUseGasless, checkEligibility]);

  const handleClick = async () => {
    if (!canUseGasless) {
      onError?.('Please connect your wallet to use gasless transactions');
      return;
    }

    if (!eligibility?.eligible) {
      setShowEligibility(true);
      return;
    }

    try {
      let result;

      switch (type) {
        case 'recordChoice':
          result = await recordChoice(data.storyId, data.decisionId, data.choiceId);
          break;
        case 'mintEnding':
          result = await mintEnding(data.storyId, data.endingId, data.metadata);
          break;
        case 'batchUpdate':
          result = await batchUpdateProgress(data.updates);
          break;
        default:
          throw new Error(`Unknown transaction type: ${type}`);
      }

      onSuccess?.(result);
    } catch (err) {
      onError?.(err.message);
    }
  };

  const getButtonText = () => {
    if (isLoading) {
      return 'Processing...';
    }
    
    if (!canUseGasless) {
      return 'Connect Wallet';
    }
    
    if (!eligibility?.eligible) {
      return 'Not Eligible';
    }
    
    return children;
  };

  const getButtonClass = () => {
    if (isLoading) return `${className} opacity-50 cursor-not-allowed`;
    if (!canUseGasless) return `${className} bg-gray-500`;
    if (!eligibility?.eligible) return `${className} bg-yellow-500`;
    return className;
  };

  return (
    <div className="relative">
      <button
        onClick={handleClick}
        disabled={disabled || isLoading || !canUseGasless}
        className={getButtonClass()}
        style={{ 
          position: 'relative',
          minWidth: '120px'
        }}
      >
        {isLoading && (
          <div style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            width: '16px',
            height: '16px',
            border: '2px solid transparent',
            borderTop: '2px solid white',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite'
          }}></div>
        )}
        <span style={{ opacity: isLoading ? 0 : 1 }}>
          {getButtonText()}
        </span>
      </button>
      
      {/* Eligibility Tooltip */}
      {showEligibility && eligibility && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: '0',
          right: '0',
          backgroundColor: 'rgba(0, 0, 0, 0.9)',
          color: 'white',
          padding: '0.5rem',
          borderRadius: '0.25rem',
          fontSize: '0.75rem',
          zIndex: 10,
          marginTop: '0.25rem'
        }}>
          <div className="text-center">
            <div className="font-bold mb-1">Gasless Transaction Not Available</div>
            <div className="text-gray-300">{eligibility.reason}</div>
            {eligibility.dailyUsage !== undefined && (
              <div className="text-gray-300 mt-1">
                Usage: {eligibility.dailyUsage}/{eligibility.maxDailyUsage} today
              </div>
            )}
            <button
              onClick={() => setShowEligibility(false)}
              className="text-blue-400 mt-2 hover:text-blue-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
      
      {/* Error Display */}
      {error && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: '0',
          right: '0',
          backgroundColor: 'rgba(239, 68, 68, 0.9)',
          color: 'white',
          padding: '0.5rem',
          borderRadius: '0.25rem',
          fontSize: '0.75rem',
          zIndex: 10,
          marginTop: '0.25rem'
        }}>
          <div className="text-center">
            <div className="font-bold mb-1">Transaction Failed</div>
            <div className="text-red-200">{error}</div>
          </div>
        </div>
      )}
      
      {/* Gasless Indicator */}
      {canUseGasless && eligibility?.eligible && (
        <div style={{
          position: 'absolute',
          top: '-8px',
          right: '-8px',
          backgroundColor: '#10b981',
          color: 'white',
          fontSize: '0.625rem',
          padding: '0.125rem 0.25rem',
          borderRadius: '0.25rem',
          fontWeight: 'bold'
        }}>
          GASLESS
        </div>
      )}
    </div>
  );
};

export default GaslessTransactionButton; 