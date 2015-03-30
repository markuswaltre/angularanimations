# angularanimations

`sass --watch scss/main.scss:css/main.css --scss --sourcemap=none --no-cache`

stole stuff from
(http://daneden.github.io/animate.css/)[http://daneden.github.io/animate.css/]


## howto

### keyframes
`@include keyframes(name) {
values
}`

### enter
`.name.ng-enter, 
.name.ng-hide-remove {
}`

### leave
`.fadeOut.ng-leave, 
.fadeOut.ng-hide-add {}`



#### some interesting quirks

* ng-repeat hide doesn't not perform well with track by $index



Directive	Supported Animations
ngRepeat	enter, leave and move
ngView	enter and leave
ngInclude	enter and leave
ngSwitch	enter and leave
ngIf	enter and leave
ngClass	add and remove (the CSS class(es) present)
ngShow & ngHide	add and remove (the ng-hide class value)
form & ngModel	add and remove (dirty, pristine, valid, invalid & all other validations)
ngMessages	add and remove (ng-active & ng-inactive)
ngMessage	enter and leave