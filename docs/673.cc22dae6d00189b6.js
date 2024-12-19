"use strict";(self.webpackChunkDublinCityMotors=self.webpackChunkDublinCityMotors||[]).push([[673],{1673:(M,m,r)=>{r.r(m),r.d(m,{ViewStockModule:()=>T});var g=r(177),l=r(9969),s=r(4341),e=r(8699),d=r(906),h=r(6554),f=r(2500),b=r(533),p=r(3824),C=r(1345),v=r(9453);const k=["content"];function S(i,u){1&i&&(e.j41(0,"div",3)(1,"div",25)(2,"h3",26),e.EFF(3,"No Cars To Show"),e.k0s()()())}function F(i,u){if(1&i&&(e.j41(0,"div"),e.nrm(1,"app-car-card",27),e.k0s()),2&i){const t=e.XpG();e.R7$(1),e.Y8G("allCars",t.paginatedCars)}}function y(i,u){if(1&i){const t=e.RV6();e.j41(0,"div",28)(1,"h4",29),e.EFF(2,"Search"),e.k0s(),e.j41(3,"button",30),e.bIt("click",function(){const o=e.eBV(t).$implicit;return e.Njj(o.dismiss("Cross click"))}),e.k0s()(),e.j41(4,"div",31)(5,"form",32),e.bIt("ngSubmit",function(){e.eBV(t);const a=e.XpG();return e.Njj(a.onFilter())}),e.j41(6,"div",33)(7,"div",34)(8,"ng-select",35),e.bIt("change",function(a){e.eBV(t);const o=e.XpG();return e.Njj(o.getModel(null==a?null:a.id))}),e.k0s()(),e.j41(9,"div",34),e.nrm(10,"ng-select",36),e.k0s(),e.j41(11,"div",34),e.nrm(12,"ng-select",37),e.k0s(),e.j41(13,"div",38)(14,"button",39),e.EFF(15,"Search"),e.k0s()()()()()}if(2&i){const t=e.XpG();e.R7$(5),e.Y8G("formGroup",t.filterForm),e.R7$(3),e.Y8G("items",t.makes)("searchable",!0),e.R7$(2),e.Y8G("items",t.models)("searchable",!0),e.R7$(2),e.Y8G("items",t.years)("searchable",!0)}}let w=(()=>{class i{constructor(t,n,a,o){this.offcanvasService=t,this.spinner=n,this.filterService=a,this.carsService=o,this.subscription=[],this.allCars=[],this.Sort=[{name:"Sort by price: Low To Heigh"},{name:"Sort by price: Heigh To Low"},{name:"Sort by Age: Oldest First"},{name:"Sort by Age: Newest First"}],this.makes=[],this.models=[],this.years=[{name:"1990"},{name:"1991"},{name:"1992"},{name:"1993"},{name:"1994"},{name:"1995"},{name:"1996"},{name:"1997"},{name:"1998"},{name:"1999"},{name:"2000"},{name:"2001"},{name:"2002"},{name:"2003"},{name:"2004"},{name:"2005"},{name:"2006"},{name:"2007"},{name:"2008"},{name:"2009"},{name:"2010"},{name:"2011"},{name:"2012"},{name:"2013"},{name:"2014"},{name:"2015"},{name:"2016"},{name:"2017"},{name:"2018"},{name:"2019"},{name:"2020"},{name:"2021"},{name:"2022"},{name:"2023"},{name:"2024"},{name:"2025"},{name:"2026"},{name:"2027"},{name:"2028"},{name:"2029"},{name:"2030"},{name:"2031"},{name:"2032"},{name:"2033"},{name:"2034"},{name:"2035"},{name:"2036"},{name:"2037"},{name:"2038"},{name:"2039"},{name:"2040"},{name:"2041"},{name:"2042"},{name:"2043"},{name:"2044"},{name:"2045"},{name:"2046"},{name:"2047"},{name:"2048"},{name:"2049"},{name:"2050"}],this.selectedSort=this.Sort[0].name,this.currentPage=1,this.carsPerPage=12,this.paginatedCars=[]}ngOnInit(){this.initFilterForm(),this.getMake();const t=this.filterService.getFilterData();0!==t.length?(this.filterForm.patchValue({make:t[0],model:t[1],regYear:t[2]}),this.onFilter()):this.getAllCars()}initFilterForm(){this.filterForm=new s.gE({make:new s.MJ(null),model:new s.MJ(null),regYear:new s.MJ(null)})}get f(){return this.filterForm.controls}get totalPages(){return Math.ceil(this.allCars.length/this.carsPerPage)}paginateCars(){const t=(this.currentPage-1)*this.carsPerPage;this.paginatedCars=this.allCars.slice(t,t+this.carsPerPage)}nextPage(){this.currentPage<this.totalPages&&(this.currentPage++,this.paginateCars())}previousPage(){this.currentPage>1&&(this.currentPage--,this.paginateCars())}openFilter(){this.offcanvasService.open(this.content,{position:"start"})}onSortChange(){switch(this.selectedSort){case"Sort by price: Low To High":this.allCars.sort((t,n)=>t.price-n.price);break;case"Sort by price: High To Low":this.allCars.sort((t,n)=>n.price-t.price);break;case"Sort by Age: Oldest First":this.allCars.sort((t,n)=>t.age-n.age);break;case"Sort by Age: Newest First":this.allCars.sort((t,n)=>n.age-t.age)}this.currentPage=1,this.paginateCars()}onFilter(){this.spinner.show(),this.carsService.getCarsByFilter(this.f.make?.value,this.f.model?.value,+this.f.regYear.value).subscribe({next:t=>{this.allCars=t,this.spinner.hide()}}),this.currentPage=1,this.paginateCars()}getMake(){this.carsService.getCarMake().subscribe(t=>{this.makes=t})}getModel(t){this.carsService.getCarModel(t).subscribe(n=>{this.models=n})}getAllCars(){this.spinner.show();let t=this.carsService.getAllCars().subscribe({next:n=>{this.allCars=n,this.paginateCars(),this.spinner.hide()}});this.subscription.push(t)}ngOnDestroy(){this.subscription&&this.subscription.forEach(t=>t.unsubscribe())}static#e=this.\u0275fac=function(n){return new(n||i)(e.rXU(d.RS),e.rXU(h.ex),e.rXU(f.E),e.rXU(b.R))};static#t=this.\u0275cmp=e.VBU({type:i,selectors:[["app-view-stock"]],viewQuery:function(n,a){if(1&n&&e.GBs(k,5),2&n){let o;e.mGM(o=e.lsd())&&(a.content=o.first)}},decls:36,vars:13,consts:[["bdColor","rgba(0, 0, 0, 0.8)","size","medium","color","#fff","type","ball-beat",3,"fullScreen"],[2,"color","white"],[1,"container-fluid","content"],[1,"row"],[1,"page-title","mb-5"],[1,"fw-bold"],[1,"subTitle"],["routerLink","/"],[1,"filter","mb-5"],["type","button",1,"navbar-toggler",3,"click"],[1,""],[1,"fa-solid","fa-align-justify","text-muted"],[1,"row","sort","mb-5"],[1,"col-md-3"],["bindLabel","name","bindValue","name","id","sort",3,"items","searchable","ngModel","change","ngModelChange"],[1,"mb-4"],["class","row",4,"ngIf"],[4,"ngIf"],[1,"col-12","d-flex","justify-content-center"],[3,"collectionSize","page","pageSize","pageChange"],[1,"row","foot"],[1,"col-md-10","text-center"],[2,"color","black !important"],[2,"max-width","65ch","margin","0 auto","margin-bottom","2em"],["content",""],[1,"col-12","bg-body-secondary","p-3"],[1,"text-center"],[3,"allCars"],[1,"offcanvas-header"],["id","offcanvas-basic-title",1,"offcanvas-title","text-center"],["type","button","aria-label","Close",1,"btn-close",3,"click"],[1,"offcanvas-body"],[3,"formGroup","ngSubmit"],[1,"row","pe-3","justify-content-center"],[1,"col-10","mb-4"],["placeholder","Select Make","name","make","formControlName","make","bindLabel","name","bindValue","name","id","Make",3,"items","searchable","change"],["placeholder","Select Model","name","model","formControlName","model","bindLabel","name","bindValue","name","id","Model",3,"items","searchable"],["placeholder","Select Year","name","year","formControlName","regYear","bindLabel","name","bindValue","name","id","Year",3,"items","searchable"],[1,"col-10"],["type","submit",1,"btn","btn-secondary","w-100","py-2","font-weight-bold"]],template:function(n,a){1&n&&(e.j41(0,"ngx-spinner",0)(1,"p",1),e.EFF(2," Loading... "),e.k0s()(),e.j41(3,"div",2)(4,"div",3)(5,"div",4)(6,"h3",5),e.EFF(7,"VIEW STOCK"),e.k0s(),e.j41(8,"span",6)(9,"a",7),e.EFF(10,"Home"),e.k0s(),e.EFF(11," / VIEW STOCK "),e.k0s()(),e.j41(12,"div",8)(13,"button",9),e.bIt("click",function(){return a.openFilter()}),e.j41(14,"span",10),e.nrm(15,"i",11),e.k0s(),e.EFF(16," Filters "),e.k0s()(),e.j41(17,"div",12)(18,"div",13)(19,"ng-select",14),e.bIt("change",function(){return a.onSortChange()})("ngModelChange",function(c){return a.selectedSort=c}),e.k0s()()()(),e.j41(20,"div",15),e.DNE(21,S,4,0,"div",16),e.DNE(22,F,2,1,"div",17),e.j41(23,"div",3)(24,"div",18)(25,"ngb-pagination",19),e.bIt("pageChange",function(c){return a.currentPage=c})("pageChange",function(){return a.paginateCars()}),e.k0s()()()(),e.j41(26,"div",20)(27,"div",21)(28,"h2",22),e.EFF(29,"APPROVED USED LUXURY CARS AT DUBLIN CITY MOTORS"),e.k0s(),e.j41(30,"p",23),e.EFF(31,"Our cars come with our own warranty, history report, service records, clear finance and mileage checked. We are AA Approved and offer Free AA Roadside Rescue and 101 Safety Check. We strive to be the most competitive around when compared to like with like vehicles"),e.k0s(),e.j41(32,"p"),e.EFF(33," Call D.C.M today, or fill out an enquiry form to arrange a test drive "),e.k0s()()()(),e.DNE(34,y,16,7,"ng-template",null,24,e.C5r)),2&n&&(e.Y8G("fullScreen",!0),e.R7$(3),e.Y8G("@scaleIn",void 0),e.R7$(1),e.Y8G("@scaleIn",void 0),e.R7$(15),e.Y8G("items",a.Sort)("searchable",!0)("ngModel",a.selectedSort),e.R7$(1),e.Y8G("@scaleIn",void 0),e.R7$(1),e.Y8G("ngIf",0===a.allCars.length),e.R7$(1),e.Y8G("ngIf",a.paginatedCars.length),e.R7$(3),e.Y8G("collectionSize",a.allCars.length)("page",a.currentPage)("pageSize",a.carsPerPage),e.R7$(1),e.Y8G("@scaleIn",void 0))},dependencies:[p.Wk,g.bT,C.vr,s.qT,s.BC,s.cb,s.vS,h.et,v.g,s.j4,s.JD,d.s5],styles:['.subTitle{font-size:12px;color:#212529bf}.subTitle a{color:#212529bf;text-decoration:none}.subTitle a:hover{text-decoration:underline!important}button.navbar-toggler i:before{content:"\\f039";font-family:"Font Awesome 5 Free";font-weight:900}button.navbar-toggler:hover i:before{content:"\\f036"}.foot{justify-content:center}.pagination{display:flex;justify-content:center;padding:1rem 0}.page-link{color:#6c757d;background-color:#f2f2f2;border:1px solid none;border-radius:5px;padding:.5rem .75rem;transition:background-color .3s ease,color .3s ease}.page-link:hover{background-color:#545b62;color:#fff}.page-item.active .page-link{color:#fff;background-color:#6c757d;border-color:#6c757d}.page-item.disabled .page-link{color:#bcc1c6;background-color:#f2f2f2;border-color:none}\n'],encapsulation:2,data:{animation:[(0,l.hZ)("scaleIn",[(0,l.kY)(":enter",[(0,l.iF)({transform:"scale(0)",opacity:0}),(0,l.i0)("1500ms ease-out",(0,l.iF)({transform:"scale(1)",opacity:1}))]),(0,l.kY)(":leave",[(0,l.i0)("1500ms ease-in",(0,l.iF)({transform:"scale(0)",opacity:0}))])])]}})}return i})();var j=r(3309);const V=[{path:"",component:w,data:{title:"View-Stock"}}];let T=(()=>{class i{static#e=this.\u0275fac=function(n){return new(n||i)};static#t=this.\u0275mod=e.$C({type:i});static#n=this.\u0275inj=e.G2t({imports:[p.iI.forChild(V),g.MD,j.G]})}return i})()}}]);