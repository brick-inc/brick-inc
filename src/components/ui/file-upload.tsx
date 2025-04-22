import * as React from "react"
import { UploadCloud } from "lucide-react"
import { cn } from "@/lib/utils"

interface FileUploadProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onFileChange?: (file: File | null) => void
  label?: string
}

const FileUpload = React.forwardRef<HTMLInputElement, FileUploadProps>(
  ({ className, onFileChange, label = "Upload file", ...props }, ref) => {
    const [fileName, setFileName] = React.useState<string>("")
    const inputRef = React.useRef<HTMLInputElement>(null)
    
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0] || null
      setFileName(file?.name || "")
      
      if (onFileChange) {
        onFileChange(file)
      }
    }
    
    const handleClick = () => {
      inputRef.current?.click()
    }
    
    return (
      <div className="w-full">
        <div
          onClick={handleClick}
          className={cn(
            "flex h-32 w-full cursor-pointer flex-col items-center justify-center rounded-md border-2 border-dashed border-input bg-background p-4 text-sm text-muted-foreground transition-colors hover:border-primary",
            className
          )}
        >
          <input 
            type="file" 
            ref={inputRef}
            className="hidden" 
            onChange={handleFileChange}
            {...props}
          />
          <UploadCloud className="mb-2 h-8 w-8" />
          <div className="text-center">
            {fileName ? (
              <p className="text-sm font-medium">{fileName}</p>
            ) : (
              <>
                <p className="font-medium">{label}</p>
                <p className="text-xs">Drag and drop or click to browse</p>
              </>
            )}
          </div>
        </div>
      </div>
    )
  }
)

FileUpload.displayName = "FileUpload"

export { FileUpload } 