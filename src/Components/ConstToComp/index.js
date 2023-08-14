import "./index.css";

function ConstsToComp() {
    const name = "Hello World";
    const obj = { name: "Hello World Object" };
    const data = ["We", "are", "United"];
    const list = [
        { name: "Hello World 1" },
        { name: "Hello World 2" },
        { name: "Hello World 3" },
    ];
    const complex = [
        { company: "XYZ", jobs: ["Javascript", "React"] },
        { company: "ABC", jobs: ["AngularJs", "Ionic"] },
    ];
    return (
        <div className="q1-wrapper">
            <div>
                <p>{name}</p>
            </div>
            <div>
                <p>{obj.name}</p>
            </div>
            <div>
                <div className="q-data">
                    {data.map((d, k) => {
                        return <p key={k}>{d}</p>;
                    })}
                </div>
            </div>
            <ol>
                {list.map((l, k) => {
                    return <li key={k}>{l.name}</li>;
                })}
            </ol>
            <div className="q-complex">
                {complex.map((c, k) => {
                    return (
                        <div key={k}>
                            <span>{c.company}</span>
                            {c.jobs.map((j, key) => {
                                return <p key={key}>{j}</p>;
                            })}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default ConstsToComp;
