import React, { useEffect, useState } from 'react';
import { Table } from '@nextui-org/react';

interface CurrencyData {
  [key: string]: {
    usd: number;
  };
}

export default function CurrTable() {
  const [currData, setCurrData] = useState<CurrencyData | null>(null);

  useEffect(() => {
    const fetchCurr = async () => {
      try {
        const response = await fetch('http://localhost:3100/api/marketCap');
        const data = await response.json();
        setCurrData(data);
      } catch (error) {
        console.error('Failed to fetch curr:', error);
      }
    };
    fetchCurr();
  }, []);

  if (!currData) {
    return <div>Loading...</div>;
  }

  const rows = Object.entries(currData).map(([token, { usd }]) => ({
    token,
    usd,
  }));

  return (
    <div style={{ marginBottom: '3px'}}>
      <Table
        bordered
        shadow={false}
        color="secondary"
        aria-label="Example pagination table"
        css={{
          height: 'auto',
          minWidth: '70%',
        }}
        selectionMode="multiple"
      >
        <Table.Header>
          <Table.Column>Token</Table.Column>
          <Table.Column>Price($)</Table.Column>
        </Table.Header>
        <Table.Body>
          {rows.map((row, index) => (
            <Table.Row key={index}>
              <Table.Cell>{row.token}</Table.Cell>
              <Table.Cell>{row.usd}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
        <Table.Pagination shadow noMargin align="center" rowsPerPage={4} />
      </Table>
    </div>
  );
}
