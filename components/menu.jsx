import NavDropdown from 'react-bootstrap/lib/NavDropdown'

export default class Menu extends React.Component {

    constructor(props) {
        super(props)
        this.state = { isOpen: false }
    }
  
    handleOpen = () => {
        this.setState({ isOpen: true })
    }
  
    handleClose = () => {
        this.setState({ isOpen: false })
    }
  
    render() {
      return (
            <NavDropdown
                id = "dropdown"
                title = {this.props.title}
                onClick = {this.handleOpen}
                onMouseEnter = {this.handleOpen}
                onMouseLeave = {this.handleClose}
                open={this.state.isOpen}
                className={this.props.className}
                noCaret
                onToggle={()=>{}}
            >
                {this.props.children}
            </NavDropdown>
      )
    }
  }