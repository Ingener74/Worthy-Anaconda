var Demo = React.createClass({
    render: function () {
        var radioOptions = [
                {value: 'newspaper', label: 'Newspaper' },
                {value: 'radio', label: 'Radio'},
                {value: 'tv', label: 'Television'},
                {value: 'search', label: 'Search Engine'},
                {value: 'social', label: 'Social'}
            ];
        return (
            <div className="container">
                <div className="row">
                    <h1>Fun with React.js</h1>

                    <form>
                        <p className="h3">How did you hear about us?</p>

                        <RadioOptionGroup
                            name="referrer"
                            other={true}
                            options={radioOptions} />

                        <p><input type="submit" /></p>
                    </form>
                </div>
            </div>
        );
    }
});
