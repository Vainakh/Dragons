CREATE TABLE dragon(
  id             SERIAL PRIMARY KEY,
  birthday       TIMESTAMP NOT NULL,
  nickname       VARCHAR(64),
  "isPublic" BOOLEAN NOT NULL,
  "saleValue" INTEGER NOT NULL,
  "generationId" INTEGER,
  FOREIGN KEY ("generationId") REFERENCES generation(id)
);