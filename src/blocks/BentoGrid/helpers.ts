import { MAX_AMOUNT_OF_ITEMS } from './Component'

export const getGridSize = (index: number, arrayLength: number) => {
  switch (index) {
    case 0:
      return 'col-span-1 row-span-4'
    case 1:
      return 'col-span-2 row-span-2'
    case 2:
      return 'col-span-1 row-span-2'
    case 3:
      return arrayLength === MAX_AMOUNT_OF_ITEMS - 1
        ? 'col-span-1 row-span-4'
        : 'col-span-1 row-span-3'
    case 4:
      return 'col-span-2 row-span-2'
    default:
      return 'col-span-1 row-span-1'
  }
}

export const getImageStyles = (index: number): string => {
  switch (index) {
    case 0:
      return '[&_img]:max-w-[250px] [&_img]:mx-auto'
    case 1:
    case 4:
      return 'absolute right-[8%] bottom-0 [&_img]:max-h-[300px] [&_img]:w-full'
    case 2:
      return 'absolute z-0 max-w-[250px] -right-[8%] -bottom-[30%]'
    default:
      return 'absolute z-0 max-w-[250px] -right-[6%] -bottom-[5%]'
  }
}
