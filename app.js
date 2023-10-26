/* 
function Counter(element, value) {
  this.element = element;
  this.value = value;

  this.resetBtn = element.querySelector(".reset");
  this.increseBtn = element.querySelector(".increase");
  this.decreaseBtn = element.querySelector(".decrease");

  this.valueDom = element.querySelector(".value");

  this.valueDom.textContent = this.value;

  this.increase = this.increase.bind(this);
  this.decrease = this.decrease.bind(this);
  this.reset = this.reset.bind(this);

  this.increseBtn.addEventListener("click", this.increase);

  this.decreaseBtn.addEventListener('click',this.decrease)

  this.resetBtn.addEventListener('click',this.reset)
}

Counter.prototype.increase = function () {
  
  this.value++;
  this.valueDom.textContent = this.value;
};
Counter.prototype.decrease = function () {
  this.value--;
  this.valueDom.textContent = this.value;
};
Counter.prototype.reset = function () {
  this.value = 0;
  this.valueDom.textContent = this.value;
};

const firstCounter = new Counter(getElement(".first-counter"), 100);

const secondCounter = new Counter(getElement(".second-counter"), 200);

function getElement(selection) {
  const element = document.querySelector(`${selection}`);

  if (element) {
    return element;
  } else {
    throw new Error(`please cheack "${selection}"`);
  }
}
 */

function Counter(element, value) {

  
   this.element = element;
   this.value = value;

console.log(this.element);
this.resetBtn = element.querySelector('.reset');
this.decreaseBtn = element.querySelector(".decrease");
this.increaseBtn = element.querySelector('.increase');
this.valueDom = element.querySelector('.value')

this.valueDom.textContent = this.value;

this.incri = this.increase.bind(this);
this.decri = this.decrease.bind(this);
this.reset = this.reset.bind(this);

this.increaseBtn.addEventListener('click',this.incri);
this.decreaseBtn.addEventListener('click',this.decri)
this.resetBtn.addEventListener('click',this.reset)

}
Counter.prototype.increase = function(){
  this.value++;
  
  this.valueDom.textContent = this.value;
}
Counter.prototype.decrease = function(){
  this.value--;
  this.valueDom.textContent = this.value;
}
Counter.prototype.reset = function(){
  this.value = 0;
  this.valueDom.textContent = this.value;
}

const firstCounter = new Counter(getElement(".first-counter"), 100);

const secondCounter = new Counter(getElement(".second-counter"),200)


function getElement(selection) {
  const element = document.querySelector(`${selection}`);


  if (element) {
    return element;
  } else {
    throw new Error(`please cheack ${selection}`);
  }
}
