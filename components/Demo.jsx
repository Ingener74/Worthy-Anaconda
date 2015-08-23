var Demo = React.createClass({
    render: function () {
        return (
            <div className="container">
                <div className="row">
                    <h1>Fun with React.js</h1>

                    <form>
                        <p className="h3">How did you hear about us?</p>

                        <RadioOption value="newspaper">
                            Newspaper
                        </RadioOption>

                        <RadioOption value="radio">
                            Radio
                        </RadioOption>

                        <RadioOption value="tv">
                            Television
                        </RadioOption>

                        <RadioOption value="search">
                            Search Engine
                        </RadioOption>

                        <RadioOption value="social">
                            Social Medai
                        </RadioOption>

                        <RadioOtherOption>
                        </RadioOtherOption>


                    </form>
                </div>
            </div>
        );
    }
});
