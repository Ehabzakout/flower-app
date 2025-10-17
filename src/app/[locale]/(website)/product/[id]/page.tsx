import RelatedProducts from "../../cart/@cart/_components/related-product/related-product";
import ProductDetails from "./_components/product-details";
import { ProductImgs } from "./_components/product-imgs";
import ProductReview from "./_components/product-review";

export default async function Page({ params }: { params: { id: string } }) {
  const res = await fetch(`https://flower.elevateegy.com/api/v1/products/${params.id}`);
  const product: { message: string; product: Product } = await res.json();
  return (
    <>
      <div className="container py-10 space-y-10 mb-20">
        <div className="flex justify-between gap-12">
          <ProductImgs product={product.product} />
          <ProductDetails product={product.product} />
        </div>
        <ProductReview productId={params.id} />
        <RelatedProducts />
      </div>
    </>
  );
}
