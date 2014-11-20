x-va-button
===========

#About component.

Based on [Polymer](https://www.polymer-project.org/) x-va-button is button with vertical animation. 

#Usage

```
bower install x-va-button
```

Import component to you'r html file.

```
<link rel="import" href="/bower_components/x-va-button.html">
```

Add:

```
<x-va-button class="blue" id="first"  direction="up">
            <div id="inner">
                <div id="text">
                    VA-BUTTON
                </div>
            </div>
</x-va-button>
```

**!Important** - all inner content of your button must be placed in #inner tag in light dom of x-va-button. 

After you must created special style to clone content of inner:

```
// If browser supports shadow selectors
#first /deep/ #clone-inner {
      font-weight: bold;
}
// Or if not
#first #clone-inner {
      font-weight: bold;
}
// I advise add both styles
```

Run browser and over mouse on x-va-button element.

## Attributes
x-va-button supports the following attributes:

*direction* - up or down
*overflowPadding* - padding for overflow "window" for element
*href* - link, <a href></a> analog.

