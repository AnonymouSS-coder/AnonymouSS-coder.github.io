import underConstructionGif from './Website_under_construction_placeholder.gif';
import './UnderConstruction.css';

function UnderConstruction() {
  return (
    <div className="under-construction">
      <img
        src={underConstructionGif}
        alt="Website under construction"
      />
    </div>
  );
}

export default UnderConstruction;
