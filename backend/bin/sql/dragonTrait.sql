CREATE TABLE dragonTrait(
  "traitId" INTEGER,
  "dragonId" INTEGER,
  FOREIGN KEY ("traitId") REFERENCES trait(Id),
  FOREIGN KEY ("dragonId") REFERENCES dragon(id)
)
