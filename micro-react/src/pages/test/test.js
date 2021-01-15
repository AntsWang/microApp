function Children({text,children}){
    console.log(arguments,text);
    return [<div>{text}</div>,children]
}

function Parent(){
      return <Children text="hah">6666</Children>
}

export default Parent;