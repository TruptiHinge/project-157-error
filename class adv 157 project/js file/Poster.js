AFRAME.registerComponent("poster",{
    init: function(){
        this.posterContainer = this.el
        this.createComics();
    },
    createComics: function(){
        const thumbNailRef = [{
        id: "captain-aero",
        title: "Captain Aero",
        url: "./assests/class-157-main/aero.jpg",
        },
        {
        id: "outer-space",
        title: "Outer space",
         url: "./assests/class-157-main/space.jpg",
        },
        {
         id: "spider-man",
         title: "Spider Man",
         url: "./assets/class-157-main/spiderman.jpg",
        },
        {
        id: "super-man",
        title: "Super Man",
        url: "./assets/class-157-main/superman.jpg",
        },
        ];
         const borderEl = this.createBorder(position,item.id)
         const Poster = this.createPoster(item)
         borderEl.appendChild(Poster)

    },
    createPoster: function(item){
        const entityEl = document.createElement("a-entity")
        entityEl.setAttribute("visible",true)
        entityEl.setAttribute("geometry",{
          primitive: "plane",
          height: 28,
          width: 20,
        })
        entityEl.setAttribute("position",{x : 0, y : 5, z : 0.1});
        entityEl.setAttribute("material",{src: item.url})
        return entityEl
    },
  
})