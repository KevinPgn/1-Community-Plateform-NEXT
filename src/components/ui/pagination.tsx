"use client"
import * as React from "react"
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react"

import { cn } from "@/lib/utils"
import { ButtonProps, buttonVariants } from "@/components/ui/button"
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  pageSize: number;
}

export function Pagination({ totalPages, currentPage, pageSize }: PaginationProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  return (
    <div className="flex justify-center space-x-2 mt-4">
      {currentPage > 1 && (
        <Link href={createPageURL(currentPage - 1)} className="px-3 py-2 bg-blue-500 text-white rounded">
          Previous
        </Link>
      )}
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <Link
          key={page}
          href={createPageURL(page)}
          className={`px-3 py-2 rounded ${
            currentPage === page ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
          }`}
        >
          {page}
        </Link>
      ))}
      {currentPage < totalPages && (
        <Link href={createPageURL(currentPage + 1)} className="px-3 py-2 bg-blue-500 text-white rounded">
          Next
        </Link>
      )}
    </div>
  );
}
