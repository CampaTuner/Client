import React, { useRef, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { v4 as uuidv4 } from 'uuid';
import ImageEditor from '@toast-ui/react-image-editor';
import 'tui-image-editor/dist/tui-image-editor.css';
import products from '../data/products';

const UploadProduct = () => {
  const editorRef = useRef(null);
  const [imageFile, setImageFile] = useState(null);
  const [productData, setProductData] = useState({
    name: '',
    description: '',
    price: '',
    sizes: '',
    colors: '',
    quantity: 1,
  });

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      setImageFile(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSaveProduct = () => {
    if (!editorRef.current) return alert("Please upload and edit image first!");

    const dataUrl = editorRef.current.getInstance().toDataURL();

    const newProduct = {
      id: uuidv4(),
      ...productData,
      price: parseFloat(productData.price),
      quantity: parseInt(productData.quantity),
      sizes: productData.sizes.split(',').map((s) => s.trim()),
      colors: productData.colors.split(',').map((c) => c.trim()),
      image: dataUrl,
    };

    products.push(newProduct);
    alert('✅ Product saved!');

    setProductData({
      name: '',
      description: '',
      price: '',
      sizes: '',
      colors: '',
      quantity: 1,
    });
    setImageFile(null);
  };

  const handleDownload = () => {
    const dataUrl = editorRef.current.getInstance().toDataURL();
    const link = document.createElement('a');
    link.download = `${productData.name || 'product'}-edited.png`;
    link.href = dataUrl;
    link.click();
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-10">
      <div className="max-w-6xl mx-auto bg-white shadow-xl rounded-2xl p-10">
        <h2 className="text-4xl font-bold mb-6 text-center">🛒 Upload New Product</h2>

        <div {...getRootProps()} className="border-2 border-dashed p-8 rounded mb-6 text-center bg-gray-100 cursor-pointer hover:bg-gray-200 transition">
          <input {...getInputProps()} />
          <p className="text-gray-600 text-lg">Drag & drop product image here, or click to browse</p>
        </div>

        {imageFile && (
          <div className="mb-10">
            <ImageEditor
              ref={editorRef}
              includeUI={{
                loadImage: {
                  path: imageFile,
                  name: 'product'
                },
                theme: {},
                menu: ['crop', 'flip', 'rotate', 'draw', 'shape', 'icon', 'text', 'filter'],
                initMenu: 'filter',
                uiSize: {
                  width: '100%',
                  height: '600px'
                },
                menuBarPosition: 'bottom'
              }}
              cssMaxHeight={500}
              cssMaxWidth={700}
              selectionStyle={{
                cornerSize: 20,
                rotatingPointOffset: 70
              }}
              usageStatistics={false}
            />

            <div className="flex gap-4 mt-4">
              <button onClick={handleDownload} className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">⬇️ Download Image</button>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          <input
            name="name"
            placeholder="Product Name"
            value={productData.name}
            onChange={handleChange}
            className="border p-3 rounded w-full"
          />
          <input
            name="price"
            placeholder="Price"
            value={productData.price}
            onChange={handleChange}
            className="border p-3 rounded w-full"
          />
          <input
            name="sizes"
            placeholder="Sizes (comma separated)"
            value={productData.sizes}
            onChange={handleChange}
            className="border p-3 rounded w-full"
          />
          <input
            name="colors"
            placeholder="Colors (comma separated)"
            value={productData.colors}
            onChange={handleChange}
            className="border p-3 rounded w-full"
          />
          <input
            name="quantity"
            type="number"
            placeholder="Quantity"
            value={productData.quantity}
            onChange={handleChange}
            className="border p-3 rounded w-full"
          />
        </div>

        <textarea
          name="description"
          placeholder="Product Description"
          value={productData.description}
          onChange={handleChange}
          className="border p-3 rounded w-full mt-6 h-32"
        />

        <div className="text-center">
          <button
            onClick={handleSaveProduct}
            className="mt-8 bg-black text-white px-10 py-3 rounded-xl text-lg hover:bg-gray-800 transition"
          >
            💾 Save Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadProduct;