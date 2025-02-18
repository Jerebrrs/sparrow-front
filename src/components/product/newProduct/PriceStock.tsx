
interface Size {
    size: string;
    stock: number;
}

interface PriceStockProps {
    priceOriginal: string;
    price: string;
    inStock: string;
    hasSize: boolean;
    sizes: Size[];
    singleSize: string;
    onPriceOriginalChange: (value: string) => void;
    onPriceChange: (value: string) => void;
    onInStockChange: (value: string) => void;
    onHasSizesChange: (value: boolean) => void;
    onSizesChange: (value: Size[]) => void;
    onSingleSizeChange: (value: string) => void;

}
export const PriceStock = ({ hasSize, inStock, onHasSizesChange, onInStockChange, onPriceChange, onPriceOriginalChange, onSingleSizeChange, onSizesChange, price, priceOriginal, singleSize, sizes }: PriceStockProps) => {
    return (
        <div>PriceStock</div>
    )
}
