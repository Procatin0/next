function HomePage() {
  return (
    <app>
      <div style={{"top": 0, "bottom": 0, margin: "auto", position: "relative"}}>
        <p style={{ "fontSize": "50px", "left": "0px", "right": "0px", "margin": "auto", "width": "fit-content" }}>Proca-BOT streams</p>
        <p style={{"fontWeight": "bold", "color": "#b5b5bd", "fontSize": "20px", "left": "0px", "right": "0px", "margin": "auto", "width": "fit-content" }}>Comparte contenido con tu servidor de forma diferente.</p>
        <br></br>
      </div>


      <style jsx global>{`
        body {
          background: #0d0d27;
        }
        * {
          font-family: Trebuchet MS;
          color: #fff
        }
        html, app {
          height: 100%;
        }
        .__next {
          height: 100%;
        }
      `}</style>
    </app>
  )
}

export default HomePage
