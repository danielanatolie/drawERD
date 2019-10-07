import React from 'react';

export const Description = () => {
  const grammar = 'Formal Grammar';
  const exampleInput = 'Example Input';
  const exampleOutput = 'Example Output';

  return (
    <div className="description">
      <div className="grammar">
        <h3> {grammar}</h3>
        <ul>
          <li>Program ::= Entity+ &| RELATIONSHIP+</li>
          <li>Entity ::= NAME & UNIQUE ATTRIBUTES+ & NON-UNIQUE ATTRIBUTES+</li>
          <li>NAME:STRING</li>
          <li>Unique attributes: LIST OF STRING</li>
          <li>Non-unique attributes: LIST OF STRING</li>
          <li>Relationship: NAME | TYPE | ENTITY1 | ENTITY2</li>
          <li>TYPE: 1-1, 1-M, M-M, M-1</li>
          <li>ENTITY1: STRING</li>
          <li>ENTITY2: STRING</li>
        </ul>
      </div>
      <div className="example">
        <h3> {exampleInput}</h3>
        <ul>
          <li>Entity: Rental</li>
          <li>Unique attributes: Phone#</li>
          <li>Non-unique attributes: Name, Date</li>
          <li>end</li>

          <li>Entity: Customer</li>
          <li>Unique attributes: CustomerID</li>
          <li>end</li>

          <li>Relationship: Has</li>
          <li>Entity1: Rental</li>
          <li>Entity2: Customer</li>
          <li>Type: 1-M</li>
          <li>end</li>
        </ul>

        <h3> {exampleOutput}</h3>
      </div>
    </div>
  );
};
