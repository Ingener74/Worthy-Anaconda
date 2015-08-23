var Demo = React.createClass({
    render: function () {
        return (
            <div className="container">
                <div className="row">
                    <h1>Fun with React.js</h1>

                    <form>
                        <p className="h3">How did you hear about us?</p>

                        <p className="radio">
                            <label>
                                <input type="radio" name="referrer" value="newspaper"/>
                                Newspaper
                            </label>
                        </p>
                        <p className="radio">
                            <label>
                                <input type="radio" name="referrer" value="radio"/>
                                Radio
                            </label>
                        </p>
                        <p className="radio">
                            <label>
                                <input type="radio" name="referrer" value="tv"/>
                                Television
                            </label>
                        </p>
                        <p className="radio">
                            <label>
                                <input type="radio" name="referrer" value="social"/>
                                Social Media
                            </label>
                        </p>
                        <p className="form-group radio">
                            <label>
                                <input type="radio" name="referrer" value="other"/>
                                Other
                            </label>
                            <label>
                                Please specify:
                                <input type="text" name="referrer_other"/>
                            </label>
                        </p>
                    </form>
                </div>
            </div>
        );
    }
});
