import React from 'react';

// Mock components for demonstration purposes
const MockCat = ({ type, color, emotion }) => (
  <div style={{ 
    backgroundColor: color, 
    borderRadius: '8px', 
    width: '150px', 
    height: '150px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    fontWeight: 'bold',
    flexDirection: 'column',
    fontSize: '14px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    position: 'relative',
    overflow: 'hidden'
  }}>
    <div style={{ marginBottom: '8px' }}>🐱</div>
    <div>{type}</div>
    <div style={{ fontSize: '12px', marginTop: '4px' }}>{emotion}</div>
  </div>
);

// Mock component implementations
const SittingCat = (props) => <MockCat type="Sitting Cat" color={props.primaryColor} emotion={props.emotion} />;
const LyingCat = (props) => <MockCat type="Lying Cat" color={props.primaryColor} emotion={props.emotion} />;
const StandingCat = (props) => <MockCat type="Standing Cat" color={props.primaryColor} emotion={props.emotion} />;
const SleepingCat = (props) => <MockCat type="Sleeping Cat" color={props.primaryColor} emotion={props.emotion} />;
const PlayingCat = (props) => <MockCat type="Playing Cat" color={props.primaryColor} emotion={props.emotion} />;
const HoldingSignCat = (props) => <MockCat type="Holding Sign Cat" color={props.primaryColor} emotion={props.signText || "Hello!"} />;
const PeekingCat = (props) => <MockCat type="Peeking Cat" color={props.primaryColor} emotion={props.emotion} />;
const FaceOnlyCat = (props) => <MockCat type="Face Only Cat" color={props.primaryColor} emotion={props.emotion} />;

function App() {
  return (
    <div className="container">
      <h1>Cute-Kitty-UI Component Showcase</h1>
      
      <div className="component-grid">
        <div className="component-card">
          <div className="component-name">SittingCat</div>
          <div className="component-display">
            <SittingCat 
              primaryColor="#FF6B6B" 
              emotion="happy" 
              animated={true} 
            />
          </div>
        </div>
        
        <div className="component-card">
          <div className="component-name">LyingCat</div>
          <div className="component-display">
            <LyingCat 
              primaryColor="#4ECDC4" 
              emotion="relaxed" 
              animated={true} 
            />
          </div>
        </div>
        
        <div className="component-card">
          <div className="component-name">StandingCat</div>
          <div className="component-display">
            <StandingCat 
              primaryColor="#FFD166" 
              emotion="alert" 
              animated={true} 
            />
          </div>
        </div>
        
        <div className="component-card">
          <div className="component-name">SleepingCat</div>
          <div className="component-display">
            <SleepingCat 
              primaryColor="#6B5CA5" 
              emotion="sleeping" 
              animated={true} 
            />
          </div>
        </div>
        
        <div className="component-card">
          <div className="component-name">PlayingCat</div>
          <div className="component-display">
            <PlayingCat 
              primaryColor="#EF476F" 
              emotion="excited" 
              animated={true} 
            />
          </div>
        </div>
        
        <div className="component-card">
          <div className="component-name">HoldingSignCat</div>
          <div className="component-display">
            <HoldingSignCat 
              primaryColor="#118AB2" 
              signText="Hello World!" 
              animated={true} 
            />
          </div>
        </div>
        
        <div className="component-card">
          <div className="component-name">PeekingCat</div>
          <div className="component-display">
            <PeekingCat 
              primaryColor="#073B4C" 
              peekFrom="left"
              emotion="curious"
              animated={true} 
            />
          </div>
        </div>
        
        <div className="component-card">
          <div className="component-name">FaceOnlyCat</div>
          <div className="component-display">
            <FaceOnlyCat 
              primaryColor="#06D6A0" 
              emotion="happy"
              animated={true} 
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;