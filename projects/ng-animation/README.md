# :sparkles: Angimate :sparkles:

`Reusable`  and `Dynamic` animations built on top of [Angular Animation](https://angular.io/guide/animations)'s API.  This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.2.0.

## Demo
www.mydemo.com

## Installation 
```
npm install angimate --save
```

## Getting Started
First import `BrowserAnimationModule` into your `AppModule`.

## Animations
### Default Animations:
Inside your components.ts file, import the animation you want to use from **angimate.** Then still inside the component file, add a metadata property called `animations:`  within the `@[Component]` decorator and call the imported animation/s here.
```typescript
// bounce.component.ts
import { Component } from '@angular/core';
import { bounce } from 'angimate';

@Component({
  selector: 'app-bounce',
  animations: [ bounce ],       // call animation here
  template:  '<h1 @bounce>My Animation</h1>'
})

export class BounceComponent {}
```
Then attach the animation to a html element by entering its name preceded with an `@` symbol.

You can import multiple animations by importing their names separated by a `,` and calling these names in the same way inside of `animations: []`
```typescript
// bounce.component.ts
import { Component } from '@angular/core';
import { bounce, wobble, fadeUp, flipX, shake, zoomFwd } from 'angimate';

@Component({
  selector: 'app-bounce',
  animations: [ bounce, wobble, fadeUp, flipX, shake, zoomFwd ],  // call animations here
  template:  // declare animations here
	  `<ul>
		  <li @bounce>One</li>
		  <li @wobble>One</li>
		  <li @fadeUp>One</li>
		  <li @flipX>One</li>
		  <li @shake>One</li>
		  <li @zoomFwd>One</li>
		  <li @wobble>One</li>
	  </ul>` 
})

export class BounceComponent {}
```

#
### Dynamic Animations:
Inside your component.ts file, import the animation transition you want based on when you want the transition to occur. 
For eg.`enterLeave`,  `enter`, `leave`  or `wildCard`

**enterLeave**:* activated when element is built and destroyed*
```typescript
// slide.component.ts
import { Component, OnInit } from '@angular/core';
import { enterLeave } from 'angimate';

const slideUp = enterLeave('slideUp', 
	animEnter({ opacity: 0, transY: '100px', duration: '700ms' }), 
	animLeave({ opacity: 0, transY: '150px', duration: '1s' }))],

@Component({
selector: 'app-slide',
animations: [ slideUp ],
templateUrl:  './slide.component.html',
styleUrls: ['./slide.component.scss'],
})

export class SlideComponent implements OnInit {}
```
**enter**:* activated when element is built*
``` typescript
const spin = enter('spin', 
	animEnter({ rotateAngle: '500deg', duration: '1.5s', scaleX: 0, scaleY: 0 })
```
**leave**: * activated when element is destroyed*
``` typescript
const drop = leave('drop', 
	animLeave({ transY: '1000px', scaleX: 0.5, scaleY: 0.5, delay: '200ms' })
```
**wildCard**: * activated on everything*
``` typescript
const flip = wildCard('flip', 
	animEnter({ perspective: '400px', rotateX: 1, rotateAngle: '90deg' }), 
	animLeave({ perspective: '400px', rotateY: 1, rotateAngle: '90deg' })
```



Attach the animation to an html element by entering its trigger name; the first parameter preceded with an `@` symbol.
```
<!-- bounce.component.html -->
<h1 @slideUp>My Animation</h1>
```
It's also possible to import only a subset of the animations:
```
import { zoomFwd } from 'angimate/lib/zoom';
```


## Hover Animations
### Default Hover Animations
All default hover animations name start with a 'h' then the animation name. Eg. hGrow, hBounce , hPush etc

Hover animations are different to others as they include two states, 'idle' and 'active' that are toggled between depending on the mouse event. The idle state has no style applied to it and active has the styles you wish for your element to become when the mouse is over this element. 

Inside your components.ts file, import the hover animation you want to use from **Angimate.** Then still inside the component file, add a metadata property called `animations:`  within the `@[Component]` decorator and call the imported animation/s here.

```
// hover.component.ts
import { Component, OnInit } from '@angular/core';
import { hPush } from 'angimate';

@Component({
selector: 'app-hover',
animations: [ hPush ],
templateUrl:  './hover.component.html',
styleUrls: ['./hover.component.scss'],
})

export class HoverComponent implements OnInit {

public push = false;   //set the state of the animation to false

constructor() { }
ngOnInit() { }

}
```
Attach the hover animation to an html element by entering its name preceded with an `@` symbol and inside [ ].  Attach the animation to its boolean name to activate the animation. Then add the mouse enter events to create the true and false values for the animation.
```
<!-- hover.component.html -->
<h3 [@hPush]="push"
	(mouseenter)="push = true"
	(mouseleave)="push = false" 
	> push </h3>
```

Here is a list of default hover animations:
* `hGrow`
* `hGrowSlow`
* `hGrowQuick`
* `hShrink`
* `hShrinkSlow`
* `hShrinkQuick`
* `hRotate`
* `hDown`
* `hUp`
* `hLeft`
* `hRight`
* `hSkewRight`
* `hSkewLeft`
* `hBounceUp`
* `hPush`
* `hPop`
#
### Dynamic Hover Animations
You can create your own hover importing the `hover function` from **Angimate** .  Inside your  metadata property `animations:`  within the `@[Component]` decorator and call `hover( )`. 

  `hover( )` takes **one must have parameters** and **two optional parameters**. 

 1. The first is the name you wish to call your animation eg. 'wobble'
 2. The second parameter  is the style object you wish to apply for active state when the mouse is over the element. This object also includes the duration *(default '300ms')*, delay *(delay '30ms')*and easing *(default cubic bezier)* styles also.  
 3. The third is the inactive state when the mouse is not over the element. This one is typically not included.

```hover('name', { transX: '100px' delay: '200ms' }, {opacity: 0.5})```

[*`boolean-transitions`*](https://angular.io/guide/transition-and-triggers#boolean-values-in-transitions)

```
// hover.component.ts
import { Component, OnInit } from '@angular/core';
import { hover } from 'angimate';

@Component({
selector: 'app-hover',
animations: [  hover( 'upsideDown', { rotateAngle: '180deg', origin: 'bottom-center, duration: '1s' } )  ],
templateUrl:  './hover.component.html',
styleUrls: ['./hover.component.scss'],
})

export class Hover implements OnInit  {

public upsideDown = false;   //set the state of the animation to false

constructor() { }
ngOnInit() { }

}
```
The syntax is the same as the default animations inside of the html component.
```
<!-- hover.component.html -->
<h3 [@upsideDown]="upsideDown"
	(mouseenter)="upsideDown = true"
	(mouseleave)="upsideDown = false" 
	> push </h3>
```
## Query and Stagger
Target children and optionally  stagger the animation for each child.
`queryChild( )` takes **two must have parameters**

 1. ```'animName'``` The name you wish to call you animation ( string ).
 2. ```{ query: 'li', ... }``` The child element you wish to target ( string ).
 3. Optional: ```{ query: 'li', stagger: '50ms' }```  The timing delay between each child element. Default is set to '30ms' and setting this to '0s' will remove any delays. Here also you can add all available params (see documentation below).

[*`Angular complex sequences`*](https://angular.io/guide/complex-animation-sequences)
```
// query.component.ts
import { Component, OnInit } from '@angular/core';
import { queryChild } from 'angimate';

@Component({
selector: 'app-query',
animations: [ queryChild('name', { query: 'li', transX: '50px' }) ],
templateUrl:  './slide.component.html',
styleUrls: ['./slide.component.scss'],
})

export  class  SlideComponent  implements  OnInit  {

constructor() { }
ngOnInit() { }

} 
```


## Documentation
**animIn( )** 
```typescript
animIn() 
animIn({opacity: 0, duration: '2s', rotateAngle: '-90deg'})
```
**animOut( )** 
```typescript
animOut() 
animOut({transY: '-500px', delay: '1s' })
```

**Transitions** 
[*`Angular transitions`*](https://angular.io/guide/transition-and-triggers#enter-and-leave-aliases) 

**:enter** takes 2 parameters.
```typescript
enter('animName', animIn({ skewY: '20px' }))
```
**:leave** takes 2 parameters.
```typescript
leave('animName', animOut())
```
**:enter & :leave** takes 3 parameters.
```typescript
enterLeave('animName', animIn({ transX: '100%' }), animOut( rotateAngle: '-180deg'))
```
__ * <=> * __ takes 3 parameters.
```typescript
wildCard('animName', animIn({ scaleX: '5' }), animOut( scaleY: '0'))
```

**All available params:**
All animations are built upon the same global animation and include all optional listed params

* duration:  *string;* | `'300ms'`
* delay:  *string;* | `'0s'`
* easing:  *string;* | `cubic bezier; different for enter and leave`
* opacity:  *number;* | `0`
* transX:  *string;* 
* transY:  *string;* 
* transZ:  *string;* 
* scaleX:  *number;*
* scaleY:  *number;*
* scaleZ:  *number;*
* rotateX:  *number;*
* rotateY:  *number;*
* rotateZ:  *number;*
* rotateAngle:  *string;* 
* skewX:  *string;* 
* skewY:  *string;* 
* perspective:  *string;* 
* origin:  *string;* | `'center'`
* offset: *number;*

**Query and Stagger additional params:**
* query:  string;
* stagger?:  string; | `'30ms'`


## Credits
https://easings.net/
https://daneden.github.io/animate.css/
