// function MainContent() {
//   return (
//     <p>main content page</p>
//   )
// }



// ReactDOM.render(
//   <MainContent />,
//   document.getElementById("root"))


// Imperative way to programme
// const h1 = document.createElement("h1")
// h1.textContent = "This is a imperative way to programme"
// h1.className = "header"
// document.getElementById("root").append(h1)


// const navbar = (
//   <nav>
//     <h1 className="header"> New Website</h1>
//       <ul>
//         <li>Menu</li>
//         <li>About</li>
//         <li>Contact</li>
//       </ul>
//   </nav>
// )

// ReactDOM.render(
//   navbar,
//   document.getElementById("root")
// )


// const page = (
//   <div class="container">
//     <img src="reactlogo.png" width="40px"></img>
//     <h1>Fun facts about React</h1>
//       <ul>
//         <li>Originally release 2013</li>
//         <li>Over 100k stars on Github</li>
//         <li>Is maintained by facebook</li>
//         <li>Used by 1000s of Enterprise apps</li>
//       </ul>
//     <h3>Reason's I like react</h3>
//       <ol>
//         <li>Composable</li>
//         <li>Declarative</li>
//         <li>Well Maintaned</li>
//       </ol>
//   </div>
// )

// ReactDOM.render(page, document.getElementById("root"))

// function TemporaryName() {
//   return (
//     <div class="container">
//       <img src="reactlogo.png" width="40px"></img>
//       <h1>Fun facts about React</h1>
//         <ul>
//           <li>Originally release 2013</li>
//           <li>Over 100k stars on Github</li>
//           <li>Is maintained by facebook</li>
//           <li>Used by 1000s of Enterprise apps</li>
//         </ul>
//       <h3>Reason's I like react</h3>
//         <ol>
//           <li>Composable</li>
//           <li>Declarative</li>
//           <li>Well Maintaned</li>
//         </ol>
//     </div>
//   )
// }



// ReactDOM.render(<TemporaryName />, document.getElementById("root"))

function Page () {
  return (
    <div>
      <header>
        <nav>
          <img src="./reactlogo.png" width="50px"></img>
        </nav>
      </header>
      <h1>Reasons I'm excited to Learn React</h1>
      <h1>My React list</h1>
      <ol>
        <li>created in 2013</li>
        <li>declarative</li>
        <li>needs to always be in  a parent</li>
        <li>composable</li>
      </ol>
      <footer> 20xx MROC development. All rights reserved</footer>
    </div>
  )
}


ReactDOM.render(<Page />, document.getElementById("root"))
