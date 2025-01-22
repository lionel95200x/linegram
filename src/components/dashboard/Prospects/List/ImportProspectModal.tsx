import React, { useState } from 'react';
import { Dialog } from '@/components/dashboard/Base/Headless';
import Papa from 'papaparse';
import Button from '../../Base/Button';

const ImportProspectModal = ({
  open,
  onClose,
  onImport,
}: {
  open: boolean;
  onClose: () => void;
  onImport: (prospects: any[]) => void;
}) => {
  const [file, setFile] = useState<File | null>(null);
  const [previewData, setPreviewData] = useState<any[]>([]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (!file) {
      alert('Veuillez sélectionner un fichier CSV à télécharger.');
      return;
    }

    Papa.parse(file, {
      header: true,
      complete: (results) => {
        setPreviewData(results.data);
      },
      error: (error) => {
        console.error("Erreur lors de l'analyse du CSV:", error);
        alert("Erreur lors de l'analyse du fichier CSV");
      },
    });
  };

  const handleImport = () => {
    onImport(previewData);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} className='w-full max-w-2xl'>
      <Dialog.Panel>
        <Dialog.Title>
          <h2 className='mr-auto text-base font-medium'>Importer des prospects depuis un CSV</h2>
        </Dialog.Title>
        <Dialog.Description className='grid gap-4 gap-y-3'>
          <input type='file' accept='.csv' onChange={handleFileChange} />
          <Button variant='primary' type='button' onClick={handleUpload} className='w-20'>
            Prévisualiser
          </Button>
          {previewData.length > 0 && (
            <div className='overflow-auto'>
              <table className='min-w-full divide-y divide-gray-200'>
                <thead>
                  <tr>
                    {Object.keys(previewData[0]).map((key) => (
                      <th
                        key={key}
                        className='px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500'
                      >
                        {key}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className='divide-y divide-gray-200 bg-white'>
                  {previewData.map((row, index) => (
                    <tr key={index}>
                      {Object.values(row).map((value, i) => (
                        <td key={i} className='whitespace-nowrap px-6 py-4 text-sm text-gray-500'>
                          {value}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </Dialog.Description>
        <Dialog.Footer>
          <Button type='button' variant='outline-secondary' onClick={onClose} className='mr-1 w-20'>
            Annuler
          </Button>
          <Button variant='primary' type='button' onClick={handleImport} className='w-20'>
            Importer
          </Button>
        </Dialog.Footer>
      </Dialog.Panel>
    </Dialog>
  );
};

export default ImportProspectModal;
