Polymer('x-va-button', {
    clone: null,
    inner: null,
    overflowPadding: 5,
    ready: function () {
        //Get inner element
        this.inner = this.$.content.getDistributedNodes()[0];
        if (!this.inner) {return console.error('#inner element is undefined');}
        this.clone = document.importNode(this.inner, true);
        this.clone.id = "clone-inner";
        // Add clone to x-va-button shadow dom
        this.$.wrapper.appendChild(this.clone);
        // Href attr to va button
        if(this.href) this.addEventListener('click',function(){window.location.href=this.href});
    },
    attached: function () {
        if (!this.clone) {return console.error('#clone element is undefined');}
        //Overflow wrapper dimensions
        this.$.wrapper.style.height = this.clone.clientHeight + this.overflowPadding + 'px';
        this.$.wrapper.style.width = this.clone.clientWidth + this.overflowPadding + 'px';
        // Directions params
        var correction = (this.$.wrapper.clientHeight-this.clone.clientHeight)-(this.$.wrapper.clientHeight-this.inner.clientHeight);
        var cloneStartTop = this.direction == 'up' ? this.clone.clientHeight + 1 + "px" : -(this.clone.clientHeight * 2 + 1) + "px";
        var cloneEndTop = -(this.clone.clientHeight + correction) + "px";
        var innerEndTop = this.direction == 'up' ? -(this.clone.clientHeight + 1) + "px" : this.clone.clientHeight + "px";
        //Animations
        this.clone.style.top = cloneStartTop;
        this.addEventListener('mouseover', function () {
            this.clone.style.top = cloneEndTop;
            this.inner.style.top = innerEndTop;
        });
        this.addEventListener('mouseout', function () {
            this.clone.style.top = cloneStartTop;
            this.inner.style.top = "0px";
        });
    },
    toCamelCase: function (string) {
        return string.replace(/([a-zA-Z0-9]*)-([a-zA-Z0-9])([a-zA-Z0-9]*)/ig, function ($1, $2, $3, $4) {
            return $2 + $3.toUpperCase() + $4;
        });
    }
});
