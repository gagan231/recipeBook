"use strict";(self.webpackChunkCourseProject=self.webpackChunkCourseProject||[]).push([[461],{5461:(J,u,p)=>{p.r(u),p.d(u,{RecipeModule:()=>k});var o=p(433),s=p(7308),f=p(4466),Z=p(5698),R=p(4004),e=p(8256),C=p(5599);let _=(()=>{class t{constructor(i,n){this.authService=i,this.router=n}canActivate(i,n){return this.authService.user.pipe((0,Z.q)(1),(0,R.U)(c=>!!c||this.router.createUrlTree(["/auth"])))}}return t.\u0275fac=function(i){return new(i||t)(e.LFG(C.e),e.LFG(s.F0))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var l=p(4668),T=p(1300),m=p(6895);function A(t,r){if(1&t&&(e.TgZ(0,"li",10),e._uU(1),e.qZA()),2&t){const i=r.$implicit;e.xp6(1),e.AsE(" ",i.name," - ",i.amount," ")}}let b=(()=>{class t{constructor(i,n,c){this.recipeService=i,this.route=n,this.router=c}ngOnInit(){this.route.params.subscribe(i=>{this.id=+i.id,this.rElementComp=this.recipeService.getRecipe(this.id)})}onToShoppingList(){this.recipeService.addtoShoppingList(this.rElementComp.ingridients)}onEditRecipe(){this.router.navigate(["edit"],{relativeTo:this.route})}onDeleteRecipe(){this.recipeService.deleteRecipe(this.id),this.router.navigate(["../"],{relativeTo:this.route})}}return t.\u0275fac=function(i){return new(i||t)(e.Y36(l.j),e.Y36(s.gz),e.Y36(s.F0))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-recipe-details"]],decls:30,vars:5,consts:[[1,"row"],[1,"col-xs-12"],[1,"img-responsive",2,"max-height","300px",3,"src","alt"],["appDropdown","",1,"btn-group","dropdown"],["type","button","data-bs-toggle","dropdown",1,"btn","btn-primary","dropdown-toggle"],[1,"caret"],[1,"dropdown-menu"],[1,"dropdown-item",2,"cursor","pointer",3,"click"],[1,"list-group"],["class","list-group-item",4,"ngFor","ngForOf"],[1,"list-group-item"]],template:function(i,n){1&i&&(e.TgZ(0,"div",0)(1,"div",1),e._UZ(2,"img",2),e.qZA()(),e.TgZ(3,"div",0)(4,"div",1)(5,"h1"),e._uU(6),e.qZA()()(),e.TgZ(7,"div",0)(8,"div",1)(9,"div",3)(10,"button",4),e._uU(11,"Manage Recipe "),e._UZ(12,"span",5),e.qZA(),e.TgZ(13,"ul",6)(14,"li")(15,"a",7),e.NdJ("click",function(){return n.onToShoppingList()}),e._uU(16,"To shopping list"),e.qZA()(),e.TgZ(17,"li")(18,"a",7),e.NdJ("click",function(){return n.onEditRecipe()}),e._uU(19,"Edit Recipe"),e.qZA()(),e.TgZ(20,"li")(21,"a",7),e.NdJ("click",function(){return n.onDeleteRecipe()}),e._uU(22,"Delete Recipe"),e.qZA()()()()()(),e.TgZ(23,"div",0)(24,"div",1),e._uU(25),e.qZA()(),e.TgZ(26,"div",0)(27,"div",1)(28,"ul",8),e.YNc(29,A,2,2,"li",9),e.qZA()()()),2&i&&(e.xp6(2),e.s9C("alt",n.rElementComp.name),e.Q6J("src",n.rElementComp.imagePath,e.LSH),e.xp6(4),e.Oqu(n.rElementComp.name),e.xp6(19),e.hij(" ",n.rElementComp.description," "),e.xp6(4),e.Q6J("ngForOf",n.rElementComp.ingridients))},dependencies:[T.x,m.sg]}),t})();function S(t,r){if(1&t){const i=e.EpF();e.TgZ(0,"div",19)(1,"div",20),e._UZ(2,"input",21),e.qZA(),e.TgZ(3,"div",22),e._UZ(4,"input",23),e.qZA(),e.TgZ(5,"div",22)(6,"button",24),e.NdJ("click",function(){const d=e.CHM(i).index,a=e.oxw();return e.KtG(a.onDeleteIngridient(d))}),e._uU(7,"X"),e.qZA()()()}2&t&&e.Q6J("formGroupName",r.index)}let g=(()=>{class t{constructor(i,n,c){this.route=i,this.recipeService=n,this.router=c,this.editMode=!1}ngOnInit(){this.route.params.subscribe(i=>{this.id=+i.id,this.editMode=null!=i.id,this.initForm()})}initForm(){let i="",n="",c="",d=new o.Oe([]);if(this.editMode){const a=this.recipeService.getRecipe(this.id);if(i=a.name,n=a.imagePath,c=a.description,a.ingridients)for(let h of a.ingridients)d.push(new o.cw({name:new o.NI(h.name,o.kI.required),amount:new o.NI(h.amount,[o.kI.required,o.kI.pattern(/^[1-9]+[0-9]*$/)])}))}this.recipeForm=new o.cw({name:new o.NI(i,o.kI.required),imagePath:new o.NI(n,o.kI.required),description:new o.NI(c,o.kI.required),ingridients:d})}onSubmit(){this.editMode?this.recipeService.updateRecipe(this.id,this.recipeForm.value):this.recipeService.addRecipe(this.recipeForm.value),this.router.navigate(["../"],{relativeTo:this.route})}onAddIngridient(){this.recipeForm.get("ingridients").push(new o.cw({name:new o.NI(null,o.kI.required),amount:new o.NI(null,[o.kI.required,o.kI.pattern(/^[1-9]+[0-9]*$/)])}))}onCancel(){this.router.navigate(["../"],{relativeTo:this.route})}onDeleteIngridient(i){this.recipeForm.get("ingridients").removeAt(i)}get controls(){return this.recipeForm.get("ingridients").controls}}return t.\u0275fac=function(i){return new(i||t)(e.Y36(s.gz),e.Y36(l.j),e.Y36(s.F0))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-recipe-edit"]],decls:38,vars:4,consts:[[1,"row"],[1,"col-12"],[3,"formGroup","ngSubmit"],["type","submit",1,"btn","btn-success",3,"disabled"],["type","button",1,"btn","btn-danger","mx-2",3,"click"],[1,"form-group"],["for","name"],["type","text","id","name","formControlName","name",1,"form-control"],["for","imagePath"],["type","text","id","imagePath","formControlName","imagePath",1,"form-control"],["imagePath",""],[1,"img-responsive",2,"max-height","350px",3,"src"],["for","description"],["type","text","id","description","rows","6","formControlName","description",1,"form-control"],[1,"row","mt-3"],["formArrayName","ingridients",1,"col-12"],["class","row my-2",3,"formGroupName",4,"ngFor","ngForOf"],[1,"row","mt-5"],["type","button",1,"btn","btn-success",3,"click"],[1,"row","my-2",3,"formGroupName"],[1,"col-8"],["type","text","formControlName","name",1,"form-control"],[1,"col-2"],["type","number","formControlName","amount",1,"form-control"],["type","button",1,"btn","btn-danger",3,"click"]],template:function(i,n){if(1&i&&(e.TgZ(0,"div",0)(1,"div",1)(2,"form",2),e.NdJ("ngSubmit",function(){return n.onSubmit()}),e.TgZ(3,"div",0)(4,"div",1)(5,"button",3),e._uU(6,"Save"),e.qZA(),e.TgZ(7,"button",4),e.NdJ("click",function(){return n.onCancel()}),e._uU(8,"Cancel"),e.qZA()()(),e.TgZ(9,"div",0)(10,"div",1)(11,"div",5)(12,"label",6),e._uU(13,"Name"),e.qZA(),e._UZ(14,"input",7),e.qZA()()(),e.TgZ(15,"div",0)(16,"div",1)(17,"div",5)(18,"label",8),e._uU(19,"Image URL"),e.qZA(),e._UZ(20,"input",9,10),e.qZA()()(),e.TgZ(22,"div",0)(23,"div",1),e._UZ(24,"img",11),e.qZA()(),e.TgZ(25,"div",0)(26,"div",1)(27,"div",5)(28,"label",12),e._uU(29,"Description"),e.qZA(),e._UZ(30,"textarea",13),e.qZA()()(),e.TgZ(31,"div",14)(32,"div",15),e.YNc(33,S,8,1,"div",16),e.TgZ(34,"div",17)(35,"div",1)(36,"button",18),e.NdJ("click",function(){return n.onAddIngridient()}),e._uU(37,"Add Ingridient"),e.qZA()()()()()()()()),2&i){const c=e.MAs(21);e.xp6(2),e.Q6J("formGroup",n.recipeForm),e.xp6(3),e.Q6J("disabled",!n.recipeForm.valid),e.xp6(19),e.Q6J("src",c.value,e.LSH),e.xp6(9),e.Q6J("ngForOf",n.controls)}},dependencies:[m.sg,o._Y,o.Fj,o.wV,o.JJ,o.JL,o.sg,o.u,o.x0,o.CE],styles:["input.ng-invalid.ng-touched[_ngcontent-%COMP%], textarea.ng-invalid.ng-touched[_ngcontent-%COMP%]{border:1px solid red}"]}),t})(),F=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-recipe-start"]],decls:2,vars:0,template:function(i,n){1&i&&(e.TgZ(0,"h3"),e._uU(1,"Please select a recipe!"),e.qZA())}}),t})();const y=function(t){return[t]};let w=(()=>{class t{constructor(i){this.recipeService=i}ngOnInit(){}}return t.\u0275fac=function(i){return new(i||t)(e.Y36(l.j))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-recipe-item"]],inputs:{rElements:"rElements",index:"index"},decls:8,vars:7,consts:[["routerLinkActive","active",1,"list-group-item","border","clearfix","p-2","bg-success","p-2","text-dark","bg-opacity-10",2,"cursor","pointer",3,"routerLink"],[1,"float-start"],[1,"list-group-item-heading"],[1,"list-group-item-text"],[1,"float-end"],[1,"img-responsive",2,"max-height","80px",3,"src","alt"]],template:function(i,n){1&i&&(e.TgZ(0,"a",0)(1,"div",1)(2,"h4",2),e._uU(3),e.qZA(),e.TgZ(4,"p",3),e._uU(5),e.qZA()(),e.TgZ(6,"span",4),e._UZ(7,"img",5),e.qZA()()),2&i&&(e.Q6J("routerLink",e.VKq(5,y,n.index)),e.xp6(3),e.Oqu(n.rElements.name),e.xp6(2),e.Oqu(n.rElements.description),e.xp6(2),e.s9C("alt",n.rElements.name),e.Q6J("src",n.rElements.imagePath,e.LSH))},dependencies:[s.yS,s.Od]}),t})();function I(t,r){if(1&t&&e._UZ(0,"app-recipe-item",4),2&t){const n=r.index;e.Q6J("rElements",r.$implicit)("index",n)}}let U=(()=>{class t{constructor(i,n,c){this.recipeService=i,this.router=n,this.route=c,this.recipes=[]}ngOnInit(){this.recipeSubs=this.recipeService.recipeSelected.subscribe(i=>{this.recipes=i}),this.recipes=this.recipeService.getRecipes()}onNewRecipe(){this.router.navigate(["new"],{relativeTo:this.route})}ngOnDestroy(){this.recipeSubs.unsubscribe()}}return t.\u0275fac=function(i){return new(i||t)(e.Y36(l.j),e.Y36(s.F0),e.Y36(s.gz))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-recipe-list"]],decls:8,vars:1,consts:[[1,"row"],[1,"col-xs-12"],[1,"btn","btn-success",3,"click"],[3,"rElements","index",4,"ngFor","ngForOf"],[3,"rElements","index"]],template:function(i,n){1&i&&(e.TgZ(0,"div",0)(1,"div",1)(2,"button",2),e.NdJ("click",function(){return n.onNewRecipe()}),e._uU(3,"New Recipe"),e.qZA()()(),e._UZ(4,"hr"),e.TgZ(5,"div",0)(6,"div",1),e.YNc(7,I,1,2,"app-recipe-item",3),e.qZA()()),2&i&&(e.xp6(7),e.Q6J("ngForOf",n.recipes))},dependencies:[m.sg,w]}),t})(),N=(()=>{class t{constructor(i){this.recipeService=i}ngOnInit(){}}return t.\u0275fac=function(i){return new(i||t)(e.Y36(l.j))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-recipe"]],decls:5,vars:0,consts:[[1,"row"],[1,"col-md-5"],[1,"col-md-7"]],template:function(i,n){1&i&&(e.TgZ(0,"div",0)(1,"div",1),e._UZ(2,"app-recipe-list"),e.qZA(),e.TgZ(3,"div",2),e._UZ(4,"router-outlet"),e.qZA()())},dependencies:[s.lC,U]}),t})();var E=p(3649);let v=(()=>{class t{constructor(i,n){this.dStorage=i,this.recipeService=n}resolve(i,n){const c=this.recipeService.getRecipes();return 0===c.length?this.dStorage.fetchRecipes():c}}return t.\u0275fac=function(i){return new(i||t)(e.LFG(E.Z),e.LFG(l.j))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const q=[{path:"",component:N,canActivate:[_],children:[{path:"",component:F},{path:"new",component:g},{path:":id",component:b,resolve:[v]},{path:":id/edit",component:g,resolve:[v]}]}];let x=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[s.Bz.forChild(q),s.Bz]}),t})(),k=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[s.Bz,f.m,o.UX,x]}),t})()}}]);