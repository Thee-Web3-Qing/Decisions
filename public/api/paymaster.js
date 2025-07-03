// Simple Paymaster proxy for development
// In production, you would use your actual Paymaster service URL

export default function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { method, params } = req.body;

    // For development, we'll simulate Paymaster responses
    // In production, this would forward to your actual Paymaster service
    
    switch (method) {
      case 'pm_sponsorUserOperation':
        // Simulate Paymaster sponsorship
        const userOp = params[0];
        const entryPoint = params[1];
        
        // Mock sponsorship response
        const sponsoredUserOp = {
          ...userOp,
          paymasterAndData: '0x' + '0'.repeat(64), // Mock paymaster data
        };

        return res.status(200).json({
          jsonrpc: '2.0',
          id: req.body.id,
          result: {
            paymasterAndData: sponsoredUserOp.paymasterAndData,
            preVerificationGas: '0x186a0', // 100,000 gas
            verificationGasLimit: '0x30d40', // 200,000 gas
            callGasLimit: '0x186a0', // 100,000 gas
          }
        });

      case 'pm_getPaymasterStubData':
        // Return mock paymaster stub data
        return res.status(200).json({
          jsonrpc: '2.0',
          id: req.body.id,
          result: {
            paymasterStubData: '0x' + '0'.repeat(64)
          }
        });

      default:
        return res.status(400).json({
          jsonrpc: '2.0',
          id: req.body.id,
          error: {
            code: -32601,
            message: 'Method not found'
          }
        });
    }
  } catch (error) {
    console.error('Paymaster proxy error:', error);
    return res.status(500).json({
      jsonrpc: '2.0',
      id: req.body.id,
      error: {
        code: -32603,
        message: 'Internal error'
      }
    });
  }
} 