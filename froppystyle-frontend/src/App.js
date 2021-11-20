import "./App.css";
import { Categoria } from "./Components/Categoria/Components/Categoria";
import NavBar from "./Components/Menu/NavBar2";
const categorias = [
  {
    id: 1,
    nombre: "Desodorantes",
    url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.crushpixel.com%2Fes%2Fstock-vector%2Fperfume-aerosol-deodorant-icon-simple-3744495.html&psig=AOvVaw1ojMQcf2VEdBC9wVDOYtJy&ust=1637451316910000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCLi3u-HLpfQCFQAAAAAdAAAAABAD",
  },
  {
    id: 2,
    nombre: "Perfumes",
    url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fes.pngtree.com%2Ffreepng%2Fperfume-icon-circle_5282356.html&psig=AOvVaw2Q65rFmVi3xoJryMc0B9L0&ust=1637451378401000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCMDE6vDLpfQCFQAAAAAdAAAAABAD",
  },
  {
    id: 3,
    nombre: "Brochas",
    url: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fw7.pngwing.com%2Fpngs%2F1014%2F17%2Fpng-transparent-computer-icons-encapsulated-postscript-belleza-makeup-brush-brush-belleza.png&imgrefurl=https%3A%2F%2Fwww.pngwing.com%2Fes%2Ffree-png-sayhi&tbnid=PXSoINiAhdrJDM&vet=12ahUKEwin94D6y6X0AhUOuZUCHXoKAfUQMygDegUIARC9AQ..i&docid=ZUhirr5YAVq55M&w=920&h=512&q=icono%20de%20brochas%20de%20maquillaje&ved=2ahUKEwin94D6y6X0AhUOuZUCHXoKAfUQMygDegUIARC9AQ",
  },
];
function App() {
  return (
    <div>
      <NavBar />
      {categorias.map((categoria) => (
        <Categoria categoria={categoria.nombre} url={categoria.url}>
          asjdlkasjdlksajdljasldasjl
        </Categoria>
      ))}
    </div>
  );
}

export default App;
