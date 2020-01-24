import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
  discussion : {
    width : "400px",
    height: "500px",
    margin : "0 auto",
    border : "1px solid #dadada",
    padding : "10px",
    fontFamily: "'Open Sans', sans-serif",
    overflowY: "scroll",
  },
  bubbleWrapper : {
    marginBottom : 10,
    display : "flex"
  },
  bubble : {
    backgroundColor : "#fafafa",
    padding : 5,
    flex : 0.75,
    display : "flex",
    flexDirection : "column"
    
    
  },
  bubbleright : {
    backgroundColor : "#ffffa5",
    justifySelf : "flex-end",
    marginLeft: "auto"

    
  },
  bubbleleft : {
    justifySelf : "flex-start"
  },
  bubbleDetailsleft : {
  fontSize : "10px"
  },
  bubbleDetailsright : {
    fontSize : "10px",
    textAlign : "right"
    }
  })

  export default useStyles