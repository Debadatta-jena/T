export default function TestImagePage() {
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-2xl font-bold mb-4">Image Test Page</h1>
      
      <div className="space-y-4">
        <div>
          <h2 className="text-lg font-semibold mb-2">Test 1: splash_screen.png</h2>
          <img 
            src="/images/splash_screen.png" 
            alt="Test 1"
            className="w-32 h-32 border"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
            }}
          />
        </div>
        
        <div>
          <h2 className="text-lg font-semibold mb-2">Test 2: splash-screen.png</h2>
          <img 
            src="/images/splash-screen.png" 
            alt="Test 2"
            className="w-32 h-32 border"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
            }}
          />
        </div>
        
        <div>
          <h2 className="text-lg font-semibold mb-2">Test 3: logo.svg</h2>
          <img 
            src="/images/logo.svg" 
            alt="Test 3"
            className="w-32 h-32 border"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
            }}
          />
        </div>
      </div>
    </div>
  );
}
