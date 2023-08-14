import "./index.css";

function ExplainComp() {
    return (
        <div className="explain">
            <div>
                <code className="head">import Something from 'package'</code>
                <p>
                    This syntax is used to import the default export from the
                    specified package/module. The default export can be any
                    value or function that the module wants to expose as its
                    primary functionality.
                </p>
                <h4>Example:</h4>
                <div className="code">
                    <code>
                        <span className="dim">
                            // Assuming 'package' exports a default function
                        </span>
                        {<br />}
                        <span className="blue">import</span> Calculator{" "}
                        <span className="blue">
                            from '<span className="green">package</span>';
                        </span>
                        {<br />}
                        <span className="pink">
                            const <span className="red">result</span> =
                        </span>{" "}
                        Calculator<span className="purple">.add</span>
                        <span className="pink">
                            (
                            <span className="orange">
                                5<span className="blue">,</span> 3
                            </span>
                            )
                        </span>
                        <span className="blue">;</span>
                    </code>
                </div>
            </div>
            <div>
                <code className="head">
                    import &#10100; Something &#10101; from 'package'
                </code>
                <p>
                    This syntax is used to import named exports from the
                    specified package/module. Named exports allow you to
                    selectively import specific functions, variables, or
                    constants from the module.
                </p>
                <h4>Example:</h4>
                <div className="code">
                    <code>
                        <span className="dim">
                            // Assuming 'package' exports multiple functions
                        </span>
                        {<br />}
                        <span className="blue">import</span>{" "}
                        <span className="yellow">&#10100;</span> add{" "}
                        <span className="yellow">&#10101;</span>{" "}
                        <span className="blue">from</span>{" "}
                        <span className="blue">'</span>
                        <span className="green">package</span>
                        <span className="blue">';</span>
                        {<br />}{" "}
                        <span className="pink">
                            const <span className="red">result</span> =
                        </span>{" "}
                        <span className="purple">add</span>
                        <span className="pink">
                            (
                            <span className="orange">
                                5<span className="blue">,</span> 3
                            </span>
                            )
                        </span>
                        <span className="blue">;</span>
                    </code>
                </div>
            </div>
        </div>
    );
}

export default ExplainComp;
