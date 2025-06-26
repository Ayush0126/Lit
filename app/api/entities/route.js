// For App Router (Next.js 13+)
import { NextResponse } from 'next/server';

export async function GET() {
  const mockEntities = [
    {
      name: 'Acme Corp',
      pan: 'AAAPL1234C',
      admin: 'John Doe',
      status: 'Active',
      createdBy: 'System',
      createdOn: '2025-06-07',
    },
    {
      name: 'Beta Ltd',
      pan: 'BBBLM5678X',
      admin: 'Jane Smith',
      status: 'Inactive',
      createdBy: 'Admin',
      createdOn: '2025-06-01',
    },
  ];

  return NextResponse.json(mockEntities);
}
