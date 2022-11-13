import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title, onAdd, showAdd}) => {

  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button 
        color={ showAdd ? 'red' : 'blue'} 
        text={ showAdd ? 'Close' : 'Add'}
        onClick={onAdd} 
      />


    </header>
  )
}

Header.defaultProps = {
  title: 'Daily Plan'
}

Header.propTypes ={
  title: PropTypes.string.isRequired,
}

// CSS IN JS
// const headingStyle = {
//   color:'red', 
//   backgroundColor: 'black'
// }

export default Header

