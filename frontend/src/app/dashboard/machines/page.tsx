'use client';

import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Plus as PlusIcon } from '@phosphor-icons/react/dist/ssr/Plus';
// import { Download as DownloadIcon } from '@phosphor-icons/react/dist/ssr/Download';
// import { Upload as UploadIcon } from '@phosphor-icons/react/dist/ssr/Upload';

// import { config } from '@/config';
import { MachinesFilters } from '@/components/dashboard/machine/machines-filter';
import { MachinesTable, type Machine } from '@/components/dashboard/machine/machines-table';
import { useQuery } from '@tanstack/react-query';
import { getMachines } from '@/api/get-machines';

// export const metadata = { title: `Customers | Dashboard | ${config.site.name}` } satisfies Metadata;

export default function Page(): React.JSX.Element {
  const { data } = useQuery({
    queryFn: getMachines,
    queryKey: ['machines'],
    staleTime: Infinity,
  })
  const page = 0
  const rowsPerPage = 5

  if(!data) {
    return <h1>No machines</h1>
  }

  const paginatedMachines = applyPagination(data.machines, page, rowsPerPage)

  return (
    <Stack spacing={3}>
      <Stack direction="row" spacing={3}>
        <Stack spacing={1} sx={{ flex: '1 1 auto' }}>
          <Typography variant="h4">Machines</Typography>
            {/* <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
              <Button color="inherit" startIcon={<UploadIcon fontSize="var(--icon-fontSize-md)" />}>
                Import
              </Button>
              <Button color="inherit" startIcon={<DownloadIcon fontSize="var(--icon-fontSize-md)" />}>
                Export
              </Button>
            </Stack> */}
        </Stack>
        <div>
          <Button startIcon={<PlusIcon fontSize="var(--icon-fontSize-md)" />} variant="contained">
            Add
          </Button>
        </div>
      </Stack>
      <MachinesFilters />
      <MachinesTable
        count={paginatedMachines.length}
        page={page}
        rows={paginatedMachines}
        rowsPerPage={rowsPerPage}
      />
    </Stack>
  );
}

function applyPagination(rows: Machine[], page: number, rowsPerPage: number): Machine[] {
  return rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
}
