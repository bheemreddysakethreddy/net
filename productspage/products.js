const product = [{
    image: "p4.jpg",
    name: "3 Ring Binder 1 Inch, 1” Clear View Cover with 2 Inside Pockets Round Ring Binder, Colored School Supplies",
    name2: "dasdkljkdslfn",
    rating: {
        starts: "pngtree-four-star-rating-sign-png-image_6026608.png",
        count: 57
    }
}, {
    image: "p4.jpg",
    name: "3 Ring Binder Pockets Round Ring Binder, Colored School Supplies",
    name2: "idshfkdsjofs",
    rating: {
        starts: "pngtree-four-star-rating-sign-png-image_6026608.png",
        count: 157
    }
}, {
    image: "p4.jpg",
    name: "Colored School Supplies",
    name2: "idshfkdsjofs",
    rating: {
        starts: "pngtree-four-star-rating-sign-png-image_6026608.png",
        count: 1157
    }
},{
    image: "p4.jpg",
    name: "3 Ring Binder Pockets Round Ring Binder, Colored School Supplies",
    name2: "idshfkdsjofs",
    rating: {
        starts: "pngtree-four-star-rating-sign-png-image_6026608.png",
        count: 157
    }
}, {
    image: "p4.jpg",
    name: "Colored School Supplies",
    name2: "idshfkdsjofs",
    rating: {
        starts: "pngtree-four-star-rating-sign-png-image_6026608.png",
        count: 1157
    }
}
];

let html = '';
product.forEach((produ) =>{

    html += ` <div class="details">
                    <img src="${produ.image}" alt="chair">
                    <div>
                        <h6 class="producthead">${produ.name}</h6>
                        <div class="productpara">
                            <img src="${produ.rating.starts}" alt="" class="ratingimg">
                            <p>${produ.rating.count}</p>
                            </div>
                            <button class="productbtn js-add-to-cart">detailed view</button>
                            </div>
                            </div>`;
                        });
                            document.querySelector(".products").innerHTML = html;
                        
                            document.querySelector(".js-add-to-cart").forEach((button)=>{
                                button.addEventListener('click',()=>{
                                    
                                });
                            });



                            //  below code for the various layouts
/* 

for (let i = 0; i < product.length; i++) {
    if (i !== 3 && i !== 1 ) {
        html += ` <div class="details">
                <img src="${product[i].image}" alt="chair">
                <div>
                    <h6 class="producthead">${product[i].name}</h6>
                    <div class="productpara">
                        <img src="${product[i].rating.starts}" alt="" class="ratingimg">
                        <p>${product[i].rating.count}</p>
                    </div>
                    <button class="productbtn">detailed view</button>
                </div>
            </div>`;
        }
    
    else if( i == 3 || i== 1){
        html += ` <div class="details">
                <img src="${product[i].image}" alt="chair">
                <div>
                <h6 class="producthead">${product[i].name}</h6>
                <h6 class="producthead">${product[i].name2}</h6>
                <div class="productpara">
                <img src="${product[i].rating.starts}" alt="" class="ratingimg">
                <p>${product[i].rating.count}</p>
                    </div>
                    <button class="productbtn">detailed view</button>
                    </div>
                    </div>`;
                
            } 
            document.querySelector(".products").innerHTML = html;
        }
 */