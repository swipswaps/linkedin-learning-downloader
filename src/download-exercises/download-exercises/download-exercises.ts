import { generateFileName } from '../../shared';
import { downloadFile, messageService } from '../../shared';
import { DownloadInfo, ExerciseFile, Included } from '../download-info.model';

export async function downloadExercises(document: Document, dir: string): Promise<void> {
  const downloadInfoChunk = Array.from(document.querySelectorAll('code[style="display: none"]')).find((i) =>
    i.textContent?.includes('exerciseFiles')
  );

  if (!downloadInfoChunk) {
    messageService.out({
      text: 'No exercises found for the course.',
      type: 'info',
    });
  }

  const downloadInfo = JSON.parse(downloadInfoChunk!.textContent as string) as DownloadInfo;

  const exerciseFilesItem = downloadInfo.included.find((i) => Boolean(i.exerciseFiles)) as Included;

  if (!exerciseFilesItem || !exerciseFilesItem.exerciseFiles?.length) {
    messageService.out({
      text: '\nNo exercises found for the course.',
      type: 'info',
    });
  } else {
    messageService.out({
      text: `\nFound ${exerciseFilesItem.exerciseFiles.length} exercises, downloading...`,
      type: 'info',
    });
  }

  let downloadProgress = 0;
  await Promise.all(
    exerciseFilesItem.exerciseFiles!.map((i, j) =>
      downloadExercise(i, dir, j)
        .then((fileName) => {
          messageService.out({
            text: `${fileName} has been downloaded.`,
            type: 'success',
          });
          messageService.out({
            text: `Download progress: ${++downloadProgress} / ${exerciseFilesItem.exerciseFiles!.length}`,
            type: 'info',
          });
        })
        .catch((e: string) =>
          messageService.out({
            text: e,
            type: 'error',
          })
        )
    )
  );
}

async function downloadExercise(file: ExerciseFile, dir: string, index: number): Promise<string> {
  const fileName = generateFileName(index, file.name);
  const url = file.url;
  await downloadFile(url, `${dir}/${fileName}`, fileName);
  return fileName;
}
