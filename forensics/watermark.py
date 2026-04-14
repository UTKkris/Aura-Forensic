import cv2
import numpy as np

def embed_uid(image_path, uid, output_path):
    """
    Embeds a 16-bit UserID into the Least Significant Bit (LSB) 
    of the blue channel of an image.
    Formula: I_wm(x,y) = (I_raw(x,y) & 0xFE) | B_uid
    """
    img = cv2.imread(image_path)
    if img is None:
        raise ValueError(f"Image not found at {image_path}")

    # Convert UID to 16-bit binary string
    binary_uid = format(uid, '016b')
    uid_idx = 0
    uid_len = len(binary_uid)

    rows, cols, _ = img.shape
    
    # Embed in the blue channel (index 0 in BGR)
    for i in range(rows):
        for j in range(cols):
            if uid_idx < uid_len:
                bit = int(binary_uid[uid_idx])
                img[i, j, 0] = (img[i, j, 0] & 0xFE) | bit
                uid_idx += 1
            else:
                break
        if uid_idx >= uid_len:
            break

    cv2.imwrite(output_path, img)
    print(f"[*] UID {uid} successfully embedded into {output_path}")
    return True

def recover_uid(image_path):
    """
    Extracts the 16-bit UserID from the LSB of the blue channel.
    """
    img = cv2.imread(image_path)
    if img is None:
        raise ValueError(f"Image not found at {image_path}")

    binary_uid = ""
    rows, cols, _ = img.shape
    
    for i in range(rows):
        for j in range(cols):
            if len(binary_uid) < 16:
                # Extract LSB of the blue channel
                bit = img[i, j, 0] & 1
                binary_uid += str(bit)
            else:
                break
        if len(binary_uid) >= 16:
            break

    recovered_uid = int(binary_uid, 2)
    print(f"[*] Recovered UID: {recovered_uid}")
    return recovered_uid

if __name__ == "__main__":
    # Example usage
    # embed_uid("frame_raw.png", 49201, "frame_watermarked.png")
    # recover_uid("frame_watermarked.png")
    pass
