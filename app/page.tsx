"use client"

export default function Home() {

    
    const click = () => {
      const num = Math.floor(Math.random() * 16777215)
      const hashNum = "#" + num .toString(16)
      console.log(hashNum)
      document.body.style.background = hashNum
      const hashCode = document.querySelector<HTMLElement>("#color-code")
      if(hashCode){
        hashCode.innerHTML = hashNum
      }
    }

  return (
    <>
    
    <div className="box">
    <h2> Color Generator By Bashar</h2>
<div className="main">
    <div className="container">
        <h1 id="color-code" > #ffff</h1>
        <button id="btn" onClick={click}>Generate Color</button>
    </div>
</div>
    </div>
    </>
  );
}
