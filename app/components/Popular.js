const React = require('react')

class Popular extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedLanguage: 'All'
        }

        this.updateLanguage = this.updateLanguage.bind(this)
    }

    updateLanguage(lang) {
        this.setState({ selectedLanguage: lang })
    }

    render () {
        const languages = ['All', 'JavaScript', 'Lua', 'Ruby', 'CSS', 'Go']
        return (
            <ul className='languages'>
                {languages.map(lang => 
                    <li
                        style={lang === this.state.selectedLanguage ? { color: 'rebeccapurple' } : null}
                        onClick={() => this.updateLanguage(lang)}
                        key={lang}>
                        {lang}
                    </li>
                )}
            </ul>
        )
    }
}

module.exports = Popular