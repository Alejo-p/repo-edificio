// crear las clases Edificio, Piso y Departamento aquí
class Departamento{
  name: string
  constructor(name:string) {
    this.name = name
  }

  getName() {
    return this.name;
  }
}

class Piso{
  name: string
  dptos: Departamento[]
  constructor(name: string) {
    this.name = name;
    this.dptos = [];
  }

  pushDepartamentos(dpto:Departamento) {
    return this.dptos.push(dpto);
  }
  getDepartamentos() {
    return this.dptos;
  }
}

class Edificio{
  pisos: Piso[]
  constructor(piso:Piso[]) {
    this.pisos = piso;
  }
  addDepartamentoToPiso(nombreDePiso: string, departamento: Departamento) {
    const pisoConTalNombre = this.pisos.find(function (p) {
       return p.name == nombreDePiso;
    })
    return pisoConTalNombre.pushDepartamentos(departamento);
  }
  getDepartamentosByPiso(nombreDePiso: string): Departamento[]{
    const pisoConTalNombre = this.pisos.find(function (p) {
      return p.name == nombreDePiso;
    })
    return pisoConTalNombre.getDepartamentos();
}
}


// no modificar este test
function testClaseEdificio() {
  const unPiso = new Piso("planta baja");
  const otroPiso = new Piso("primer piso");
  const unEdificio = new Edificio([unPiso, otroPiso]);
  const deptoUno = new Departamento("depto uno");
  const deptoDos = new Departamento("depto dos");
  const deptoTres = new Departamento("depto tres");
  unEdificio.addDepartamentoToPiso("planta baja", deptoUno);
  unEdificio.addDepartamentoToPiso("planta baja", deptoDos);
  unEdificio.addDepartamentoToPiso("planta baja", deptoTres);

  const deptos = unEdificio.getDepartamentosByPiso("planta baja");
  const deptosEmpty = unEdificio.getDepartamentosByPiso("primer piso");

  if (
    Array.isArray(deptosEmpty) &&
    deptosEmpty.length == 0 &&
    deptos.length == 3 &&
    deptos[2].getName() == "depto tres"
  ) {
    console.log("testClaseBandaApartment passed");
  } else {
    throw "testClaseBandaApartment not passed";
  }
}

function main() {
  testClaseEdificio();
}
main();
