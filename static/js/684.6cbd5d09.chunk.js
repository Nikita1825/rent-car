"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[684],{3785:function(n,e,a){a.d(e,{E:function(){return D}});var i,r,s,c,t,o,l,d,p,x,u,h=a(9439),f=a(168),m=a(6487),j=a(6856),g=m.zo.p(i||(i=(0,f.Z)(["\n  font-family: 'Manrope-400';\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 18px;\n  letter-spacing: 0em;\n  color: rgba(18, 20, 23, 0.5);\n  margin-top: 8px;\n  gap: 12px\n"]))),v=(m.zo.li(r||(r=(0,f.Z)(["\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 1.5;\n  \ncolor: rgba(18, 20, 23, 0.5);\n  :not(:last-child) {\n    border-right: 1px solid rgba(18, 20, 23, 0.2)};\n    \n    padding-right: 4px;\n  }\n"]))),m.zo.ul(s||(s=(0,f.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  row-gap: 4px;\n  padding-left: 0\n\n"]))),m.zo.p(c||(c=(0,f.Z)(["\n  font-family: 'Manrope-400';\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 18px;\n  letter-spacing: 0em;\n  color: rgba(18, 20, 23, 0.5);\n  margin-top: 4px;\n  gap: 12px;\n"])))),_=m.zo.p(t||(t=(0,f.Z)(["\n  font-family: 'Manrope-400';\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 18px;\n  letter-spacing: 0em;\n  color: rgba(18, 20, 23, 0.5);\n  margin-top: 4px;\n  gap: 12px;\n"]))),b=m.zo.p(o||(o=(0,f.Z)(["\n  font-family: 'Manrope-400';\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 18px;\n  letter-spacing: 0em;\n  color: rgba(18, 20, 23, 0.5);\n  margin-top: 4px;\n  gap: 12px;\n"]))),C=m.zo.p(l||(l=(0,f.Z)(["\n  \n  font-size: 12px;\n  font-weight: 600;\n  line-height: 18px;\n  \n"]))),N=(0,m.zo)(j.FU5)(d||(d=(0,f.Z)(["\n  color: black;\n  \n"]))),z=a(5131),Z=a(2791),w={backdrop:"modal_backdrop__6NK0h",wrapper:"modal_wrapper__kCicp",imgModal:"modal_imgModal__mkjt5",carInfo:"modal_carInfo__lZsr9",carP:"modal_carP__zPsyV",carsOptions:"modal_carsOptions__xSjCb",carDescription:"modal_carDescription__qw8WH",accessories:"modal_accessories__NWwAj",rental:"modal_rental__e5DJN",conditions:"modal_conditions__5SVGF",carRenal:"modal_carRenal__IxpbE",btnCar:"modal_btnCar__n70K3",closeIcon:"modal_closeIcon__Y5vNH"},y=a(184),M=function(n){var e=n.children,a=n.onClose;n.isOpen;return(0,y.jsx)("div",{className:w.backdrop,children:(0,y.jsxs)("div",{className:w.wrapper,children:[(0,y.jsx)("button",{className:w.closeIcon,onClick:function(){a()},children:(0,y.jsx)(N,{})}),e]})})},k=function(n){var e,a,i=n.advert,r=(n.onClose,e=i,a=["id","type","fuelConsumption","engineSize","accessories","functionalities","rentalCompany","address"],Object.fromEntries(a.map((function(n){return[n,e[n]]})))),s=i.address&&i.address,c=i.address&&s.slice(s.indexOf(",")+2),t=i.address&&c.slice(0,c.indexOf(",")),o=i.address&&c.slice(c.indexOf(",")+2),l=i.type,d=r.id,p=i.year,x=i.fuelConsumption,u=i.engineSize,h=i.accessories,f=i.functionalities,m=i.mileage,j=i.rentalPrice;return(0,y.jsx)("div",{children:(0,y.jsxs)("li",{className:w.carLi,children:[(0,y.jsx)("img",{className:w.imgModal,src:i.img?i.img:"https://images.cars.com/cldstatic/wp-content/uploads/1673941437-1425510881103.jpeg",alt:""}),(0,y.jsxs)("div",{className:w.carInfo,children:[(0,y.jsx)("p",{className:w.carP,children:i.make}),(0,y.jsxs)("p",{className:w.carP,children:[i.model,","]}),(0,y.jsx)("p",{className:w.carP,children:i.year})]}),(0,y.jsxs)(g,{className:w.carsOptions,children:[t&&" ".concat(t," |")," ",o&&" ".concat(o," |")," Id: ",d," "," |"," ","Year: ",p&&"".concat(p," | "),"Type: ",l&&"  ".concat(l)]}),(0,y.jsxs)(v,{className:w.carsOptions,children:["Fuel Consumption: ",x&&" ".concat(x," | "),"EngineSize:",u&&" ".concat(u," ")]}),(0,y.jsx)("p",{className:w.carDescription,children:i.description}),(0,y.jsx)("p",{className:w.carDescription,children:"Accessories and functionalities:"}),(0,y.jsx)(_,{className:w.accessories,children:h&&"".concat(h,"  ")}),(0,y.jsx)(b,{className:w.accessories,children:f&&"".concat(f,"  ")}),(0,y.jsx)("p",{className:w.conditions,children:"Rental Conditions: "}),(0,y.jsxs)("div",{className:w.rental,children:[(0,y.jsx)("p",{className:w.carRenal,children:i.rentalConditions.split("\n")[0]}),(0,y.jsx)("p",{className:w.carRenal,children:i.rentalConditions.split("\n")[1]})]}),(0,y.jsxs)("div",{className:w.rental,children:[(0,y.jsx)("p",{className:w.carRenal,children:i.rentalConditions.split("\n")[2]}),(0,y.jsxs)(C,{children:["Mileage: ",m&&"".concat(m," ")]}),(0,y.jsxs)(C,{children:["Price: ",j&&"".concat(j,"  ")]})]}),(0,y.jsx)("button",{className:w.btnCar,children:"Rental car"})]})})},I=a(4420),P=a(8424),L=a(2580),O=a(6822),E=a(8820),B=O.Z.button(p||(p=(0,f.Z)(["\n  position: relative;\n  top: 35px;\n  left: 240px;\n  z-index: 2;\n  background-color: transparent;\n  border: none;\n"]))),R=(0,O.Z)(E.M_L)(x||(x=(0,f.Z)(["\n  color: #3470ff;\n"]))),S=(0,O.Z)(E.lo)(u||(u=(0,f.Z)(["\n  color: white;\n"]))),A=function(n){var e=n.advert,a=(0,I.I0)(),i=(0,I.v9)(L.Tc).favorites.some((function(n){return n.id===e.id}));return(0,y.jsx)("div",{children:(0,y.jsx)(B,{onClick:function(){a(i?(0,P.Ng)(e):(0,P.IO)(e))},children:i?(0,y.jsx)(R,{size:18}):(0,y.jsx)(S,{size:20})})})},D=function(n){var e,a,i=n.advert,r=(e=i,a=["id","type","fuelConsumption","engineSize","accessories","functionalities","rentalCompany","address"],Object.fromEntries(a.map((function(n){return[n,e[n]]})))),s=i.address&&i.address,c=i.address&&s.slice(s.indexOf(",")+2),t=i.address&&c.slice(0,c.indexOf(",")),o=i.address&&c.slice(c.indexOf(",")+2),l=i.rentalCompany,d=i.type,p=i.model,x=r.id,u=(0,Z.useState)(!1),f=(0,h.Z)(u,2),m=f[0],j=f[1];return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)("li",{className:z.Z.carLi,children:[(0,y.jsx)(A,{advert:i}),(0,y.jsx)("img",{className:z.Z.imgCar,src:i.img?i.img:"https://images.cars.com/cldstatic/wp-content/uploads/1673941437-1425510881103.jpeg",alt:""}),(0,y.jsxs)("div",{className:z.Z.carInfo,children:[(0,y.jsx)("p",{className:z.Z.carP,children:i.make}),(0,y.jsxs)("p",{className:z.Z.carP,children:[i.model,","]}),(0,y.jsx)("p",{className:z.Z.carP,children:i.year}),(0,y.jsx)("p",{className:z.Z.carP,children:i.rentalPrice})]}),(0,y.jsxs)(g,{children:[t&&" ".concat(t," |")," ",o&&" ".concat(o," |"),l&&" ".concat(l," |"),d&&"  ".concat(d," |"),p&&" ".concat(p," |")," ",x," "," |"]}),(0,y.jsx)("button",{className:z.Z.btnCar,onClick:function(){j(!0)},children:"Learn more"})]}),m&&(0,y.jsx)(M,{isOpen:m,onClose:function(){j(!1)},children:(0,y.jsx)(k,{advert:i})})]})}},4684:function(n,e,a){a.r(e),a.d(e,{default:function(){return z}});var i,r,s,c,t,o=a(2791),l=a(4420),d=a(7045),p=a(3785),x=a(5131),u=a(2580),h=a(184),f=function(){var n=(0,l.v9)(u.DI);return(0,h.jsx)(h.Fragment,{children:(0,h.jsx)("ul",{className:x.Z.carList,children:n.map((function(n){return(0,h.jsx)(p.E,{advert:n},n.id)}))})})},m=a(1473),j=a(168),g=a(6487),v=g.zo.div(i||(i=(0,j.Z)(["\n  margin-top: 20px;\n  display: flex;\n  gap: 18px;\n  justify-content: center;\n  align-items: flex-end;\n"]))),_=g.zo.label(r||(r=(0,j.Z)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  color: #8a8a89;\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 18px;\n  gap: 8px;\n"]))),b=g.zo.select(s||(s=(0,j.Z)(["\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  outline: none;\n  appearance: none;\n  border: none;\n  border-radius: 14px;\n  background: #f7f7fb;\n  padding: 14px 18px;\n  width: 224px;\n  font-family: Manrope;\n  font-size: 18px;\n  font-weight: 500;\n  line-height: 20px;\n  cursor: pointer;\n"]))),C=g.zo.option(c||(c=(0,j.Z)(["\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 20px;\n"]))),N=(g.zo.button(t||(t=(0,j.Z)(["\n  border: none;\n  color: #fff;\n  font-family: Manrope;\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 20px;\n  border-radius: 12px;\n  background: #3470ff;\n  padding: 14px 44px;\n  cursor: pointer;\n"]))),function(){var n=(0,l.I0)();return(0,h.jsx)(v,{children:(0,h.jsxs)(_,{children:["Car brand",(0,h.jsxs)(b,{name:"brand",onChange:function(e){n((0,m.a)(e.target.value))},children:[(0,h.jsx)(C,{value:"",children:"Enter the text"}),(0,h.jsx)(C,{value:"Buick",children:"Buick"}),(0,h.jsx)(C,{value:"Volvo",children:"Volvo"}),(0,h.jsx)(C,{value:"HUMMER",children:"HUMMER"}),(0,h.jsx)(C,{value:"Subaru",children:"Subaru"}),(0,h.jsx)(C,{value:"Mitsubishi",children:"Mitsubishi"}),(0,h.jsx)(C,{value:"Nissan",children:"Nissan"}),(0,h.jsx)(C,{value:"Lincoln",children:"Lincoln"}),(0,h.jsx)(C,{value:"GMC",children:"GMC"}),(0,h.jsx)(C,{value:"Hyundai",children:"Hyundai"}),(0,h.jsx)(C,{value:"MINI",children:"MINI"}),(0,h.jsx)(C,{value:"Bentley",children:"Bentley"}),(0,h.jsx)(C,{value:"Mercedes-Benz",children:"Mercedes-Benz"}),(0,h.jsx)(C,{value:"Aston Martin",children:"Aston Martin"}),(0,h.jsx)(C,{value:"Pontiac",children:"Pontiac"}),(0,h.jsx)(C,{value:"Lamborghini",children:"Lamborghini"}),(0,h.jsx)(C,{value:"Audi",children:"Audi"}),(0,h.jsx)(C,{value:"BMW",children:"BMW"}),(0,h.jsx)(C,{value:"Chevrolet",children:"Chevrolet"}),(0,h.jsx)(C,{value:"Chrysler",children:"Chrysler"}),(0,h.jsx)(C,{value:"Kia",children:"Kia"}),(0,h.jsx)(C,{value:"Land",children:"Land"})]})]})})}),z=function(){var n=(0,l.I0)();return(0,o.useEffect)((function(){n((0,d.G)())})),(0,h.jsxs)("div",{children:[(0,h.jsx)("h1",{children:"catalog"}),(0,h.jsx)(N,{}),(0,h.jsx)(f,{})]})}},2580:function(n,e,a){a.d(e,{DI:function(){return s},Tc:function(){return r}});var i=a(3553),r=function(n){return n.favorites},s=(0,i.P1)([function(n){return n.adverts.items},function(n){return n.filter}],(function(n,e){return n.filter((function(n){return n.make.toLowerCase().includes(e.toLowerCase())}))}))},5131:function(n,e){e.Z={carLi:"car_carLi__AaBAX",imgCar:"car_imgCar__nvGqO",carList:"car_carList__8z5Qx",carInfo:"car_carInfo__px0jw",carP:"car_carP__usZvW",btnCar:"car_btnCar__XsFQ8"}}}]);
//# sourceMappingURL=684.6cbd5d09.chunk.js.map