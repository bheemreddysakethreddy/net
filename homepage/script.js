const catogries = [{
    name:'New Year, New Supplies',
    image:"images/p1.jpg",
    clickhere:"shop stationary"
}, {
    name:"Get Your Game on",
    image:"images/p2.jpg",
    clickhere:"shop gaming"
    
},{
    name:"gaming accessories",
    image:"images/p3.jpg",
    clickhere:"shop accessories"
},{
    name:'Shop deals in Fashion',
    image:'images/p11.jpg',
    clickhere:'shop fashion'
},{
    name:'Shop deals in Kitchen',
    image:'images/p15.jpg',
    clickhere:'shop kitchen items'
},{
    name:'Shop deals in decorators',
    image:'images/p19.jpg',
    clickhere:'shop decorators'
},{
    name:'Shop deals in gifts',
    image:'images/p21.jpg',
    clickhere:'shop gifts'
},{
    name:'Shop deals',
    image:'images/p10.jpg',
    clickhere:'shop here'
}
];
catogries.forEach((catogrie)=> {
    const html = `<div class="product-1">
            <p class="product-1-details">${catogrie.name}</p>
            <img src="${catogrie.image}" class="image-1">
            <a class="shop-here">${catogrie.clickhere}</a>
        </div>`;

        
        document.querySelector(".products").innerHTML += html ;
    });


    // const footdetails = [{name1:'Careers',name2:'Blog',name3: 'Investor',name4:' Amazon',name5:'asklakk',name6:'njfh'}]
    // footdetails.forEach((footde)=>{
    //     const foothtml= `
    //     <div class="amazon-details-1">
    //     <p class="amazon-details-head">${footde.name1}</p>
    //         <p class="amp">${footde.name2}</p>
    //         <p class="amp">${footde.name3}</p>
    //         <p class="amp">${footde.name4}</p>
    //         <p class="amp">${footde.name5}</p>
    //         <p class="amp">${footde.name6}</p>
    //         </div>`;
    //         document.querySelector(".for-flex").innerHTML += foothtml;
    // })


