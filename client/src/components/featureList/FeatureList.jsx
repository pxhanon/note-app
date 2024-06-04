import "./featureList.css";

export default function FeatureList({id, title, active, setSelected}) {
    return (
        <li 
            className={active ? "featureList active" : "featureList"} 
            onClick={() => setSelected(id)}>
            {title}
        </li>
    )
}
