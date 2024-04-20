# blueatom

blueatom is an application to create software diagrams. It extends PlantUML syntax to allow for a more feature rich diagram creation experience.

Check it out at [blueatom.dev](https://blueatom.dev)

## Features

- Full PlantUML diagramming experience
- Ability to enable additional PlantUML libraries
- Add layers to diagrams to create multiple views from a single document

## Usage/Examples

### Sequence diagram with layers
```plantuml
@[my-first-layer]
Me->blueatom: Hello!
@[my-second-layer]
blueatom->Me: Hi!
```

### C4 diagram with layers
Enable C4 library in the Settings tab first.
```plantuml
Person(user, "User")
SystemBoundary(mysystem, "My System") {
  Container(ui, "ui")
  Container(api, "api")
  ContainerDb(db, "db")
  @[with-new-service]
  Container(mynewservice, "My New Service")
}

Rel(user, ui, "")
Rel(ui, api, "")
Rel(api, db, "")
@[with-new-service]
Rel(api, mynewservice, "")
```


## Support

For support, create a new Issue.
