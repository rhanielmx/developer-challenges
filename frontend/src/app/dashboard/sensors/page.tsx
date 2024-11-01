'use client';

import * as React from 'react';
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { Plus as PlusIcon } from '@phosphor-icons/react/dist/ssr/Plus'
import { useQuery } from '@tanstack/react-query'
import { SensorsFilters } from '@/components/dashboard/sensor/sensors-filter'
import { SensorsTable, type Sensor } from '@/components/dashboard/sensor/sensors-table'
import { getSensors } from '@/api/get-sensors'

// export const metadata = { title: `Customers | Dashboard | ${config.site.name}` } satisfies Metadata;

export default function Page(): React.JSX.Element {
  const { data } = useQuery({
    queryFn: getSensors,
    queryKey: ['sensors'],
    staleTime: Infinity,
  })
  const page = 0
  const rowsPerPage = 5

  if(!data) {
    return <h1>No sensors</h1>
  }

  const paginatedSensors = applyPagination(data.sensors, page, rowsPerPage)

  return (
    <Stack spacing={3}>
      <Stack direction="row" spacing={3}>
        <Stack spacing={1} sx={{ flex: '1 1 auto' }}>
          <Typography variant="h4">Sensors</Typography>
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
      <SensorsFilters />
      <SensorsTable
        count={paginatedSensors.length}
        page={page}
        rows={paginatedSensors}
        rowsPerPage={rowsPerPage}
      />
    </Stack>
  );
}

function applyPagination(rows: Sensor[], page: number, rowsPerPage: number): Sensor[] {
  return rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
}
