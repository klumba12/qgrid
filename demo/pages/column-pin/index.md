# Column pin

Column pin allows you to pin (froze) some columns in the qgrid

### Markup

Specify pin property to override default behavior of the column and to make it pinned (frozen)

```html
<q-grid columns="$ctrl.columns"
        rows="$ctrl.rows">
    <q-grid:columns generation="deep">
        <q-grid:column key="name.first" pin="left"></q-grid:column>
        <q-grid:column key="name.last"></q-grid:column>
    </q-grid:columns>
</q-grid>
```

### Properties

* pin property affects on functionality for each column to be pinned (frozen)

pin property can accept two values :
* left

  pins column to the left side of the grid
* right

  pins column to the left side of the grid
