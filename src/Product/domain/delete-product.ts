export interface DeleteProducts{
    deleteProduct(productId: string): Promise<string | null>;
}