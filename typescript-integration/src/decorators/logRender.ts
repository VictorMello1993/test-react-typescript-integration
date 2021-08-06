//Decorator responsável por mostrar o status de renderização de um componente React no console

type Component = {
  new(...args: any[]): {
    render(): any
  }
}

export default function logRender<C extends Component>(component: C){
  return class extends component {
    render(){
      console.log('Renderizando o componente...')
      const result: any = super.render()
      console.log('Renderização concluída')

      return result
    }
  }
}