import React , {useRef , useState} from 'react';

const ToggleTagAndContent = () => {
    const divRef = useRef(null);
    const [myText , setMyText] = useState('');
    const [myContent , setMyContent] = useState('Albert');
    const changeCurrentTag = (myText , myContent) =>{
      const currentElement = divRef.current;
      const hElement = document.createElement(myText);
      // hElement.innerHTML = currentElement.innerHTML;
      hElement.innerHTML = myContent;
      currentElement.parentNode.replaceChild(hElement , currentElement);
    }
    return (
     <div>
      <div ref = {divRef}>
        {myContent}
      </div>
      <input value = {myText} onChange = {(e) => setMyText(e.target.value)}/>
      <input value = {myContent} onChange={(e) => setMyContent(e.target.value)}/>
      <button onClick ={ () => changeCurrentTag(myText , myContent)}>Toggle Tag</button>
     </div>
    );
}

export default ToggleTagAndContent